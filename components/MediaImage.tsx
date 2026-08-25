"use client";

import Image from "next/image";
import { useState } from "react";

type MediaImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  placeholderLabel?: string;
};

export default function MediaImage({
  src,
  alt,
  fill,
  width,
  height,
  className = "",
  sizes,
  priority,
  placeholderLabel = "Image coming soon",
}: MediaImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-bg-soft text-center ${fill ? "absolute inset-0" : ""} ${className}`}
        style={!fill && width && height ? { width, height } : undefined}
        role="img"
        aria-label={alt}
      >
        <span className="px-4 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-text-secondary">
          {placeholderLabel}
        </span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={className}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
