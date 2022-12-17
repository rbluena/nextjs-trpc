export const PUBLIC_URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export const isDevelopment = process.env.NODE_ENV !== "production";

export const isProduction = process.env.NODE_ENV === "production";
