import siccaService from "../services/SiccaService";
import Mail from "../lib/mail";
 class GenerateSicca {

  public async handle({ data } : any) {
    const { idEmpresa, startDate, endDate } = data as {
      idEmpresa: string;
      startDate: string;
      endDate: string;
    };
    const result = await siccaService.execute(
      idEmpresa,
      startDate,
      endDate
    );
    Mail.sendMail(result, "<b>Olá tudo bem?</br> segue em anexo o seu relatório Sicca, em caso de duvidas contate a BMS</b>");
  }
}

export default new GenerateSicca()
