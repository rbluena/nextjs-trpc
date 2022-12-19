/*
  Warnings:

  - You are about to drop the `LoginToken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LoginToken" DROP CONSTRAINT "LoginToken_userId_fkey";

-- DropTable
DROP TABLE "LoginToken";

-- CreateTable
CREATE TABLE "login_token" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "redirect" TEXT NOT NULL DEFAULT '/'
);

-- CreateIndex
CREATE UNIQUE INDEX "login_token_id_key" ON "login_token"("id");

-- AddForeignKey
ALTER TABLE "login_token" ADD CONSTRAINT "login_token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
