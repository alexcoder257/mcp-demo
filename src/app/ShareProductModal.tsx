"use client";

import { useEffect, useState } from "react";

interface ShareProductModalProps {
  productId: number;
  productName: string;
  onClose: () => void;
}

export default function ShareProductModal({ productId, productName, onClose }: ShareProductModalProps) {
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch(`/api/share?productId=${productId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to generate share link");
        return res.json();
      })
      .then((data) => {
        setUrl(data.url);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not generate share link. Please try again.");
        setLoading(false);
      });
  }, [productId]);

  function handleCopy() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    /* Backdrop */
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      {/* Modal panel — stop clicks from bubbling to backdrop */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "32px",
          width: "480px",
          maxWidth: "90vw",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
          <div>
            <h2 style={{ fontWeight: 700, fontSize: "20px", color: "#3A3A3A", margin: 0 }}>
              Share Product
            </h2>
            <p style={{ fontWeight: 500, fontSize: "14px", color: "#898989", marginTop: "4px" }}>
              {productName}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#898989",
              fontSize: "20px",
              lineHeight: 1,
              padding: "4px",
            }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        {loading && (
          <p style={{ color: "#898989", fontSize: "14px", textAlign: "center", padding: "16px 0" }}>
            Generating link…
          </p>
        )}

        {error && (
          <p style={{ color: "#E97171", fontSize: "14px", textAlign: "center", padding: "16px 0" }}>
            {error}
          </p>
        )}

        {!loading && !error && (
          <>
            <p style={{ fontWeight: 500, fontSize: "14px", color: "#3A3A3A", marginBottom: "8px" }}>
              Shareable link
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              <input
                readOnly
                value={url}
                style={{
                  flex: 1,
                  border: "1px solid #D9D9D9",
                  borderRadius: "4px",
                  padding: "10px 12px",
                  fontSize: "14px",
                  color: "#3A3A3A",
                  backgroundColor: "#F4F5F7",
                  outline: "none",
                }}
                onFocus={(e) => e.target.select()}
              />
              <button
                type="button"
                onClick={handleCopy}
                style={{
                  backgroundColor: copied ? "#2EC1AC" : "#B88E2F",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "14px",
                  border: "none",
                  borderRadius: "4px",
                  padding: "10px 20px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "background-color 0.2s",
                }}
              >
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
