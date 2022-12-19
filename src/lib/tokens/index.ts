import jwt from "jsonwebtoken";
import {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  tokenExpiration,
} from "~/constants";

type AccessTokenPayload = {
  userId: string;
};

type RefreshTokenPayload = {
  userId: string;
  version: number;
};

export const signAccessToken = (payload: AccessTokenPayload) => {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, {
    expiresIn: tokenExpiration.AccessToken,
  });
};

export const signRefreshToken = (payload: RefreshTokenPayload) =>
  jwt.sign(payload, REFRESH_TOKEN_SECRET, {
    expiresIn: tokenExpiration.RefreshToken,
  });
