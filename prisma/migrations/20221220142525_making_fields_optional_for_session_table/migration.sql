-- AlterTable
ALTER TABLE "session" ALTER COLUMN "accessToken" DROP NOT NULL,
ALTER COLUMN "refreshToken" DROP NOT NULL,
ALTER COLUMN "verificationToken" DROP NOT NULL,
ALTER COLUMN "redirect" DROP NOT NULL;
