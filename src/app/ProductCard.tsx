"use client";

import Image from "next/image";
import { useState } from "react";
import ShareProductModal from "./ShareProductModal";

export interface Product {
  id: number;
  name: string;
  type: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: { type: "discount" | "new"; label: string };
}

const badgeBgMap: Record<"discount" | "new", string> = {
  discount: "#E97171",
  new: "#2EC1AC",
};

const compareIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <path d="M2 5.333h12M10.667 2.667L13.333 5.333l-2.666 2.667M14 10.667H2M5.333 8L2.667 10.667 5.333 13.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const likeIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <path d="M8 13.333S1.333 9.667 1.333 5.333a3.333 3.333 0 016.667-1.2 3.333 3.333 0 016.667 1.2c0 4.334-6.667 8-6.667 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const shareIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M17 16c-.788 0-1.499.31-2.034.808L7.91 12.93c.05-.31.09-.62.09-.93s-.04-.62-.09-.93l7.056-3.877C15.5 7.69 16.212 8 17 8c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3c0 .31.04.62.09.93L7.034 9.808C6.499 9.31 5.788 9 5 9c-1.657 0-3 1.343-3 3s1.343 3 3 3c.788 0 1.499-.31 2.034-.808l7.056 3.877C14.04 19.38 14 19.69 14 20c0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3z" />
  </svg>
);

export default function ProductCard({ product }: { product: Product }) {
  const [shareOpen, setShareOpen] = useState(false);
  const badgeBg = product.badge ? badgeBgMap[product.badge.type] : undefined;

  return (
    <>
      <div style={{ position: "relative", width: "285px", backgroundColor: "#F4F5F7", cursor: "pointer" }} className="group overflow-hidden">
        {/* Image */}
        <div style={{ position: "relative", width: "285px", height: "301px", overflow: "hidden" }}>
          <Image src={product.image} alt={product.name} fill sizes="285px" style={{ objectFit: "cover" }} unoptimized />

          {/* Badge */}
          {product.badge && (
            <div
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                backgroundColor: badgeBg,
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
              }}
            >
              <span style={{ fontWeight: 500, fontSize: "14px", color: "#fff" }}>
                {product.badge.label}
              </span>
            </div>
          )}

          {/* Hover overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-6"
            style={{ backgroundColor: "rgba(58,58,58,0.72)" }}
          >
            <button
              type="button"
              style={{
                backgroundColor: "#fff",
                color: "#B88E2F",
                fontWeight: 600,
                fontSize: "16px",
                width: "202px",
                height: "48px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Add to cart
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              {/* Share */}
              <button
                type="button"
                onClick={() => setShareOpen(true)}
                style={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "14px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {shareIcon}
                Share
              </button>
              {/* Compare */}
              <button
                type="button"
                style={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "14px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {compareIcon}
                Compare
              </button>
              {/* Like */}
              <button
                type="button"
                style={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "14px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {likeIcon}
                Like
              </button>
            </div>
          </div>
        </div>

        {/* Info */}
        <div style={{ padding: "16px 16px 30px" }}>
          <p style={{ fontWeight: 600, fontSize: "24px", lineHeight: 1.2, color: "#3A3A3A" }}>
            {product.name}
          </p>
          <p style={{ fontWeight: 500, fontSize: "16px", lineHeight: 1.5, color: "#898989", marginTop: "4px" }}>
            {product.type}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "8px" }}>
            <span style={{ fontWeight: 600, fontSize: "20px", color: "#3A3A3A" }}>
              {product.price}
            </span>
            {product.originalPrice && (
              <span style={{ fontWeight: 400, fontSize: "16px", color: "#B0B0B0", textDecoration: "line-through" }}>
                {product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>

      {shareOpen && (
        <ShareProductModal
          productId={product.id}
          productName={product.name}
          onClose={() => setShareOpen(false)}
        />
      )}
    </>
  );
}
