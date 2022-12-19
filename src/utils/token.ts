import crypto from "node:crypto";

export default async function generateHashToken() {
  return crypto
    .createHash("sha256")
    .update("we all love nextjs, isn't that right!")
    .digest("hex");
}
