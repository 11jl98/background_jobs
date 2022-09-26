import { ISicca } from "../interfaces/sicca";
import config from "../util/config/mail";

const nodemailer = require("nodemailer");
class Mail {

  sendMail( csv: ISicca[]) {
    let mailOptions = {
      from: "joaoferreira19981011@gmail.com",
      to: "joaoferreira19981011@gmail.com",
      subject:"Relatorio sicca",
      html: JSON.stringify(csv),
    };

    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: false,
      auth: {
        user: config.user,
        pass: config.password,
      },
      tls: { rejectUnauthorized: false },
    });

    transporter.sendMail(mailOptions, function (error: any, info: any) {
      if (error) {
        return error;
      } else {
        return "E-mail enviado com sucesso!";
      }
    });
  }
}

export default new Mail();
