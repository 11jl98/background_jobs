import { ISicca } from "../interfaces/sicca";
import config from "../util/config/mail";
import CSV from "./Csv";
import Logger from "../util/exceptions/logger";
import path from "path";

const nodemailer = require("nodemailer");
let cnpjRevenda: string;
let pathFile: string;
let fileName: string;
class Mail {
  public sendMail(csv: ISicca[], html: string) {
    if (csv) {
      cnpjRevenda = csv[0].cnpjRevenda;
      CSV.generateCSV(csv);
      pathFile = path.resolve(__dirname + `../../../csv/${cnpjRevenda}.csv`);
      fileName = `${cnpjRevenda}.csv`;
    } else {
      pathFile = path.resolve(__dirname + `../../../csv/logger/logger.txt`);
      fileName = `logger.txt`;
    }
    let mailOptions = {
      from: "joaoferreira19981011@gmail.com",
      to: "joaoferreira19981011@gmail.com",
      subject: "Relatorio sicca",
      html: html,
      attachments: [
        {
          filename: fileName,
          path: pathFile,
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
        if (csv)
        CSV.destroyCSV(cnpjRevenda);
        else 
        Logger.destroyLogger()
      }
    });
  }
}

export default new Mail();
