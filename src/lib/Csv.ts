import fs from "fs";
import path from "path";

class CsvEmail {

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

  public destroyCSV(filename: string){
    fs.unlink(path.resolve(__dirname + `../../../csv/${filename}.csv`),function (erro) {
        if (erro) {
          throw erro;
        }
        console.log("Arquivo deletado");
      })
  }
}

export default new CsvEmail();

