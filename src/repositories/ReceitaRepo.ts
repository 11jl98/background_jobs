import { database } from '../util/config/database'
import { ReceitaEntity } from '../entities/Receita'

export class ReceitaRepo {
  async findBy(idEmpresa: string, idReceita: string): Promise<ReceitaEntity> {
    const data = await database('receitas')
      .select<ReceitaEntity>(['id_cliente', 'id_propriedade'])
      .where({ id_empresa: idEmpresa })
      .andWhere({ id_receita: idReceita })
      .first()
    return new ReceitaEntity(data)
  }

}
