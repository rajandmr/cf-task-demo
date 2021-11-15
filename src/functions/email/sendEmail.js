const nodemailer = require("nodemailer");

const { getSuccessResponse } = require("../../utils/success");
const { getErrorResponse } = require("../../utils/error");

module.exports.main = async (event) => {
  try {
    const { emails } = JSON.parse(event.body);
    const transporter = nodemailer.createTransport({
      host: process.env.MAILGUN_HOST,
      port: parseInt(process.env.MAILGUN_PORT),
      secure: false,
      auth: {
        user: process.env.MAILGUN_USER,
        pass: process.env.MAILGUN_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: "mail@rajankalwar.com.np",
      to: emails,
      subject: "test email",
      html: "<b>Hello World</b>",
    });

    return getSuccessResponse("message sent");
  } catch (error) {
    return getErrorResponse(error);
  }
};
