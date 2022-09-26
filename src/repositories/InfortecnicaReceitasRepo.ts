import { database } from '../util/config/database'
import { InfortecnicaReceitaEntity } from '../entities/InfortecnicaReceita'


export class InfortecnicaReceitaRepo {
  async findAll(idEmpresa: string, idReceita: string): Promise<InfortecnicaReceitaEntity[]> {
    const data = await database('infortecnica_receitas')
      .select<InfortecnicaReceitaEntity[]>('*')
      .where({ id_empresa: idEmpresa })
      .andWhere({ id_receita: idReceita })

    return data.map(infortecnicaReceita => new InfortecnicaReceitaEntity(infortecnicaReceita))
  }

}