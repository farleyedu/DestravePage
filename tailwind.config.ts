import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#FDFCFA",
          alt: "#F7F6F3",
          card: "#FFFFFF",
          footer: "#F0EFEB",
        },
        text: {
          primary: "#1A1A1A",
          secondary: "#4A5568",
          muted: "#9CA3AF",
        },
        cta: {
          primary: "#000000",
          hover: "#2D2D2D",
        },
        accent: "#2563EB",
        border: {
          DEFAULT: "#E5E4E0",
          strong: "#D1D0CC",
        },
        success: "#10B981",
        error: "#EF4444",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-desktop": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "hero-mobile": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h2-desktop": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "h2-mobile": ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "h3": ["1.5rem", { lineHeight: "1.3" }],
        "body": ["1.125rem", { lineHeight: "1.7" }],
        "small": ["0.875rem", { lineHeight: "1.5" }],
      },
      spacing: {
        "section-desktop": "120px",
        "section-mobile": "64px",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
