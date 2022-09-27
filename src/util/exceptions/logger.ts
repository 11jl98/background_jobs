import fs from "fs";
import path from "path";

class Logger {
  public registerLogger(line: string) {
    let exists = fs.existsSync(
      path.resolve(__dirname + `../../../csv/logger/logger.txt`)
    );
    if (exists) {
      let text = String(
        fs.readFileSync(
          path.resolve(__dirname + `../../../csv/logger/logger.txt`)
        )
      );
      text = text + "\n" + line;
      fs.writeFileSync(
        path.resolve(__dirname + `../../../csv/logger/logger.txt`),
        text
      );
    } else {
      fs.writeFileSync(
        path.resolve(__dirname + `../../../csv/logger/logger.txt`),
        line
      );
    }
  }
  public destroyLogger(){
    fs.unlink(path.resolve(__dirname + `../../../csv/logger/logger.txt`),function (erro) {
        if (erro) {
          throw erro;
        }
        console.log("Arquivo deletado");
      })
  }
}

export default new Logger()