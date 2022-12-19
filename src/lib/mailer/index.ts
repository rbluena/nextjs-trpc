import nodemailer from "nodemailer";
import { isProduction, PUBLIC_URL } from "~/constants/index";

let mailConfig = {
  host: "",
  port: 587,
  secure: false,
  auth: {
    user: "",
    pass: "",
  },
};

export async function sendLoginEmail({
  token,
  email,
  name,
}: {
  email: string;
  name: string;
  token: string;
}) {
  const testAccount = await nodemailer.createTestAccount();

  if (!isProduction) {
    mailConfig.host = "smtp.ethereal.email";
    mailConfig.port = 587;
    mailConfig.secure = false;
    mailConfig.auth.user = testAccount.user;
    mailConfig.auth.pass = testAccount.pass;
  }

  const transporter = nodemailer.createTransport(mailConfig);

  const verificationLink = `<a href="${PUBLIC_URL}/auth/${token}">Sign In</a>`;

  const info = await transporter.sendMail({
    from: "no-reply@company.io",
    to: `${email}`,
    subject: "Login to your account",
    html: `Welcome ${name}! \n\n
        Please click the link below to login.\n\n
        ${verificationLink}
      `,
  });

  console.log(nodemailer.getTestMessageUrl(info));
}
