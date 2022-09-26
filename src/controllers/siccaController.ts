import { Request, Response } from "express";
import queueSicca from "../lib/Queue";
import siccaService  from "../services/SiccaService";

export class UserAPI {

  public async execute(request: Request, response: Response) {
    const { idEmpresa, startDate, endDate } = request.query as {
      idEmpresa: string;
      startDate: string;
      endDate: string;
    };
    const data: any = {
      idEmpresa,
      startDate,
      endDate,
    };
    console.log( 'taaquiiii')
    // queueSicca.Queue(data);
    const result = await siccaService.execute(
      idEmpresa,
      startDate,
      endDate
    );
    return response
      .status(200)
      .json({
        message: "Seu relatorio está sendo processado e logo será gerado !",
        data: result
      });
  }
}
