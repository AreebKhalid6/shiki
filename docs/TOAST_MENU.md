# Toast Menus API V2 Integration

This site displays Shiki’s published Toast menu on `/menu` and sends guests to Toast Online Ordering for checkout.

## Architecture

| Layer | Location |
|--------|----------|
| Secure API route | `app/api/menu/route.ts` → `GET /api/menu` |
| Toast auth + menus client | `lib/toast/` |
| Menu UI | `components/MenuContent.tsx`, `components/menu/*` |

Credentials never leave the server. The browser only calls `/api/menu`.

## Environment variables

Copy `.env.example` → `.env.local`:

```bash
TOAST_CLIENT_ID=
TOAST_CLIENT_SECRET=
TOAST_RESTAURANT_GUID=
TOAST_API_BASE_URL=https://ws-api.toasttab.com
TOAST_ORDERING_URL=https://shiki.toast.site/menu/shiki-4900-dodge-street
TOAST_MENU_CACHE_TTL_SECONDS=300
```

### How to get `TOAST_RESTAURANT_GUID`

This must be the **restaurant location GUID (UUID)**, not:

- Numeric Restaurant ID
- Partner GUID
- API Credentials / Client ID

Typical places to find it:

1. Toast Web → your restaurant location settings / restaurant info (GUID shown for the location).
2. Toast developer tools / API responses that include `restaurantGuid`.
3. Toast Tables / other integrations that already use the location GUID.

If the GUID is missing or not a UUID, `/api/menu` returns a clear configuration error instead of crashing the site.

## Caching & sync

1. Access tokens are cached in memory until ~60s before `expiresIn`.
2. Transformed menu JSON is cached in memory (`TOAST_MENU_CACHE_TTL_SECONDS`, default 300s).
3. Before refreshing a cached menu, the server calls `GET /menus/v2/metadata`. If `lastUpdated` is unchanged, the full `/menus` download is skipped.
4. Concurrent `/api/menu` requests share one in-flight fetch.
5. If Toast is down but a previous menu exists in memory, that stale menu is returned.

When staff publish menu changes in Toast Admin, this site picks them up after the cache TTL (or sooner if metadata reports a new `lastUpdated`).

## Visibility rules

Menus API V2 returns all channels. This site only shows entities whose `visibility` includes:

- `TOAST_ONLINE_ORDERING`, or
- `ORDERING_PARTNERS`

POS-only items are hidden.

## Local development

```bash
npm install
cp .env.example .env.local   # then fill secrets
npm run dev
```

Open `http://localhost:3000/menu`.

Run unit tests:

```bash
npm test
```

## Deploy (Vercel)

Add the same environment variables in the Vercel project settings (Production + Preview). Redeploy after changing secrets.

## Security notes

- Do not commit `.env.local`.
- If Client Secret was shared in chat or email, rotate it in Toast Web and update env vars.
- `/api/menu` never returns access tokens or client secrets.

## Ordering

The **Order Online** button opens `TOAST_ORDERING_URL`. This website does not create carts, orders, or payments.
