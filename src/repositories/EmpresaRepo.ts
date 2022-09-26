import { database } from '../util/config/database'
import { EmpresaEntity } from '../entities/Empresa'

export class EmpresaRepo {
  async findBy(idEmpresa: string): Promise<any> {
    const data = await database('empresas')
      .select<any>('cpfcnpj')
      .where({ id_empresa: idEmpresa })
      .first()
    return data
  }
}