import { Parser } from "json2csv";
import { ISicca } from "../interfaces/sicca";
import fs from "fs";
import path from "path";

class CsvEmail {
  private parser = new Parser();

  public async generateCSV(result: any[]) {
    let csv = "";

    for (var i = 0; i < result.length; i++) {
      var line = "";
      for (var index in result[i]) {
        if (index != "agrotoxicos") line += result[i][index] + ";";
        else
          for (var j = 0; j < result[i][index].length; j++) {
            for (var index2 in result[i][index][j]) {
              line += result[i][index][j][index2] + ";";
            }
          }
      }

      line.slice(0, line.length - 1);

      csv += line + "\r\n";
    }
    const cnpjRevenda = result[0].cnpjRevenda;
    fs.writeFile(
      path.resolve(__dirname + `../../../csv/${cnpjRevenda}.csv`),
      csv,
      function (erro) {
        if (erro) {
          throw erro;
        }

        console.log("Arquivo salvo");
      }
    );
  }
}

export default new CsvEmail();

// const csv = this.parser.parse(result);
// console.log(csv)
