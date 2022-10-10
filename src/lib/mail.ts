import { ISicca } from "../interfaces/sicca";
import config from "../util/config/mail";
import CSV from "./Csv";
import Logger from "../util/exceptions/logger";
import path from "path";
import fs from 'fs'

const nodemailer = require("nodemailer");
let cnpjRevenda: string;
let pathFile: string;
let fileName: string;
let html: string;
let exists: boolean
class Mail {
  public sendMail(csv: ISicca[]) {
    exists = fs.existsSync(
      path.resolve(__dirname + `../../../csv/logger/logger.txt`)
    );

    if (!exists) {
      cnpjRevenda = csv[0].cnpjRevenda;
      CSV.generateCSV(csv);
      pathFile = path.resolve(__dirname + `../../../csv/${cnpjRevenda}.csv`);
      fileName = `${cnpjRevenda}.csv`;
      html = "<b>Olá tudo bem?<br/> segue em anexo o seu relatório Sicca, em caso de duvidas contate a BMS</b>"
    } else {
      pathFile = path.resolve(__dirname + `../../../csv/logger/logger.txt`);
      fileName = `logger.txt`;
      html = "<b>Olá tudo bem?<br/> O seu sicca nao foi gerado devido aos seguintes erros no logger a bais, entre em contato com a BMS para solucionarmso o problema</b>"

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
        if (!exists)
        CSV.destroyCSV(cnpjRevenda);
        else 
        Logger.destroyLogger()
      }
    });
  }
}

export default new Mail();
