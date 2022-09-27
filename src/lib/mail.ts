import { ISicca } from "../interfaces/sicca";
import config from "../util/config/mail";
import CSV from "./Csv";
import path from "path";

const nodemailer = require("nodemailer");
class Mail {
  public sendMail(csv: ISicca[]) {
    const cnpjRevenda = csv[0].cnpjRevenda;
    let mailOptions = {
      from: "joaoferreira19981011@gmail.com",
      to: "joaoferreira19981011@gmail.com",
      subject: "Relatorio sicca",
      html: "<b>Olá tudo bem?</br> segue em anexo o seu relatório Sicca, em caso de duvidas contate a BMS</b>",
      attachments: [
        {
          filename: `${cnpjRevenda}.csv`,
          path: path.resolve(__dirname + `../../../csv/${cnpjRevenda}.csv`),
        },
      ],
    };
    CSV.generateCSV(csv);
    const transporter = nodemailer.createTransport({
      service: config.service,
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
