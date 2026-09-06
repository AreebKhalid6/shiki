import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  formatToastPrice,
  transformToastMenus,
  __test_isPubliclyVisible,
} from "../transform";
import type { ToastMenusResponse } from "../types";
import { mapToastStatusToMessage } from "../errors";

describe("formatToastPrice", () => {
  it("formats base prices", () => {
    const result = formatToastPrice(12.5, "BASE_PRICE");
    assert.equal(result.priceVaries, false);
    assert.match(result.priceLabel ?? "", /\$12\.50/);
  });

  it("does not invent a fixed price for open pricing", () => {
    const result = formatToastPrice(null, "OPEN_PRICE");
    assert.equal(result.priceVaries, true);
    assert.equal(result.priceLabel, "Market");
  });

  it("hides zero prices instead of showing $0.00", () => {
    const result = formatToastPrice(0, "BASE_PRICE");
    assert.equal(result.priceLabel, null);
    assert.equal(result.priceVaries, false);
  });

  it("marks size pricing as variable", () => {
    const result = formatToastPrice(8, "SIZE_PRICE");
    assert.equal(result.priceVaries, true);
    assert.match(result.priceLabel ?? "", /from/);
  });
});

describe("visibility filtering", () => {
  it("includes toast online ordering entities", () => {
    assert.equal(__test_isPubliclyVisible(["TOAST_ONLINE_ORDERING"]), true);
  });

  it("excludes POS-only entities", () => {
    assert.equal(__test_isPubliclyVisible(["POS"]), false);
  });

  it("excludes empty visibility", () => {
    assert.equal(__test_isPubliclyVisible([]), false);
  });
});

describe("transformToastMenus", () => {
  const sample: ToastMenusResponse = {
    restaurantGuid: "11111111-1111-4111-8111-111111111111",
    lastUpdated: "2026-01-01T00:00:00.000Z",
    menus: [
      {
        name: "Dinner",
        visibility: ["TOAST_ONLINE_ORDERING"],
        menuGroups: [
          {
            name: "Starters",
            guid: "group-1",
            visibility: ["TOAST_ONLINE_ORDERING"],
            menuItems: [
              {
                name: "Edamame",
                guid: "item-1",
                description: "Sea salt",
                price: 7,
                pricingStrategy: "BASE_PRICE",
                visibility: ["TOAST_ONLINE_ORDERING"],
              },
              {
                name: "Staff Only Item",
                guid: "item-2",
                price: 1,
                pricingStrategy: "BASE_PRICE",
                visibility: ["POS"],
              },
            ],
          },
        ],
      },
    ],
  };

  it("keeps public items and drops POS-only items", () => {
    const result = transformToastMenus(sample);
    assert.equal(result.categories.length, 1);
    assert.equal(result.categories[0]?.items.length, 1);
    assert.equal(result.categories[0]?.items[0]?.name, "Edamame");
    assert.equal(result.categories[0]?.items[0]?.priceLabel, "$7.00");
    assert.equal(result.categories[0]?.menuName, "Dinner");
    assert.equal(result.categories[0]?.subtitle, null);
  });

  it("does not invent item data", () => {
    const result = transformToastMenus({ menus: [] });
    assert.deepEqual(result.categories, []);
  });
});

describe("mapToastStatusToMessage", () => {
  it("maps auth and permission errors", () => {
    assert.match(mapToastStatusToMessage(401), /authentication/i);
    assert.match(mapToastStatusToMessage(403), /access/i);
    assert.match(mapToastStatusToMessage(404), /published/i);
    assert.match(mapToastStatusToMessage(429), /rate/i);
  });
});
