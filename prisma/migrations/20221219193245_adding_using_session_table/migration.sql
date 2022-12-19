-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "verificationToken" TEXT NOT NULL,
    "redirect" TEXT NOT NULL DEFAULT '/'
);

-- CreateIndex
CREATE UNIQUE INDEX "session_id_key" ON "session"("id");

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
