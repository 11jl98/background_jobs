import { ISicca } from "../interfaces/sicca";
import config from "../util/config/mail";
import Logger from '../util/exceptions/logger'
import CSV from "./Csv";
import path from "path";

const nodemailer = require("nodemailer");
class Mail {
  public sendMail(csv: ISicca[], html: string) {
    const cnpjRevenda = csv[0].cnpjRevenda;
    CSV.generateCSV(csv);
    let mailOptions = {
      from: "joaoferreira19981011@gmail.com",
      to: "joaoferreira19981011@gmail.com",
      subject: "Relatorio sicca",
      html: html,
      attachments: [
        {
          filename: `${cnpjRevenda}.csv`,
          path: path.resolve(__dirname + `../../../csv/${cnpjRevenda}.csv`),
        },
      ],
    };
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
        CSV.destroyCSV(cnpjRevenda);
      }
    });
  }
}

export default new Mail();
