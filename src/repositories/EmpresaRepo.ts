import { database } from '../util/config/database'
import { EmpresaEntity } from '../entities/Empresa'

export class EmpresaRepo {
  async findBy(idEmpresa: string): Promise<EmpresaEntity> {
    const data = await database('empresas')
      .select<EmpresaEntity>('cpfcnpj')
      .where({ id_empresa: idEmpresa })
      .first()
    return new EmpresaEntity(data)
  }
}