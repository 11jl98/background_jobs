import { database } from '../util/config/database'
import { PropriedadeEntity } from '../entities/Propriedade'

export class PropriedadeRepo {
  async findBy(idEmpresa: string, idPropriedade: string): Promise<PropriedadeEntity> {
    const data = await database('propriedades')
      .select<PropriedadeEntity[]>(['nomepropriedade', 'codibge'])
      .where({ id_empresa: idEmpresa })
      .where({ id_propriedade: idPropriedade })
      .first()
    return new PropriedadeEntity(data)
  }

}
