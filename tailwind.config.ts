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
          base: "#0E0E0E",
          alt: "#1F1F1F",
          card: "#1A1A1A",
          footer: "#121212",
        },
        text: {
          primary: "#EAEAEA",
          secondary: "#CFCFCF",
          muted: "#9A9A9A",
        },
        cta: {
          primary: "#C6A75E",
          hover: "#B99544",
        },
        accent: "#C6A75E",
        border: {
          DEFAULT: "#2B2B2B",
          strong: "#3A3A3A",
        },
        success: "#1F3D2B",
        error: "#3B2620",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Times New Roman", "serif"],
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
