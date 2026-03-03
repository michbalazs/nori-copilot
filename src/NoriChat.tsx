import React from "react";

export default function NoriChat() {
  // Replace the URL below with the exact iframe URL from your Web app channel (Embed code)
  const src =
    "https://copilotstudio.preview.microsoft.com/environments/06552ecd7a49-e093-8ac6-15c2103f134b/bots/crc9f_noriStaffSupportCopilot/webchat?__version__=2";

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 960,
          height: "85vh",
          background: "white",
          borderRadius: 12,
          boxShadow: "0 8px 28px rgba(0,0,0,.15)",
          overflow: "hidden",
          border: "1px solid #e6e6e6",
        }}
      >
        <iframe
          title="Nori Copilot"
          src={src}
          style={{ width: "100%", height: "100%", border: 0 }}
          allow="clipboard-read; clipboard-write"
        />
      </div>
    </div>
  );
}