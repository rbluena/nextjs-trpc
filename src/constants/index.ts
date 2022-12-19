export const PUBLIC_URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export const isDevelopment = process.env.NODE_ENV !== "production";

export const isProduction = process.env.NODE_ENV === "production";

export const tokenExpiration = {
  AccessToken: 5 * 60, // Expires after 5 minutes.
  RefreshToken: 60 * 60 * 24 * 7, // Expires after 7 days
};

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
