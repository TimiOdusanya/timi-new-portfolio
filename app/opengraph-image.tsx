import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Timi Odusanya — Senior Full Stack & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #04071D 0%, #0C0E23 50%, #0d0f2b 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow blobs */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Top label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(139,92,246,0.15)",
            border: "1px solid rgba(139,92,246,0.4)",
            borderRadius: 999,
            padding: "8px 24px",
            marginBottom: 32,
          }}
        >
          <span style={{ color: "#a78bfa", fontSize: 18, fontWeight: 600, letterSpacing: 2 }}>
            SENIOR FULL STACK &amp; AI ENGINEER
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: -2,
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          Timi Odusanya
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: "#94a3b8",
            marginTop: 20,
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.5,
          }}
        >
          6 years building AI-powered, production-grade platforms at scale
        </div>

        {/* Tech pills */}
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 40,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS"].map((tech) => (
            <div
              key={tech}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 8,
                padding: "8px 18px",
                color: "#e2e8f0",
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            color: "rgba(148,163,184,0.6)",
            fontSize: 18,
          }}
        >
          timiodusanya.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
