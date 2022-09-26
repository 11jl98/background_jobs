import { SiccaService } from "../services/SiccaService";
import Mail from "../lib/mail";

 class GenerateSicca {
  private siccaService = new SiccaService();

  public async handle(data : any) {
    const { idEmpresa, startDate, endDate } = data as {
      idEmpresa: string;
      startDate: string;
      endDate: string;
    };
    const result = await this.siccaService.execute(
      idEmpresa,
      startDate,
      endDate
    );
    Mail.sendMail(result);
  }
}

export default new GenerateSicca()
