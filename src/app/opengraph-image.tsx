import { ImageResponse } from "next/og"
import { siteConfig } from "@/config/site"

export const alt = siteConfig.title
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          color: "#f8fafc",
          backgroundColor: "#0e1220",
          backgroundImage:
            "radial-gradient(circle at 10% 10%, rgba(61,214,255,0.35), transparent 45%), radial-gradient(circle at 90% 20%, rgba(190,100,255,0.3), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#66e3ff",
          }}
        >
          {siteConfig.jobTitle}
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, marginTop: 24 }}>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", fontSize: 36, marginTop: 24, color: "#b6bfd0" }}>
          SaaS platforms · Mobile apps · MVPs
        </div>
      </div>
    ),
    size
  )
}
