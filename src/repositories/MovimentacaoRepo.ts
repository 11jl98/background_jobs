import { database } from '../util/config/database'
import { MovimentacaoEntity } from '../entities/Movimentacao'


export class MovimentacaoRepo {

  async findBy(idEmpresa: string, startDate: string, endDate: string): Promise<MovimentacaoEntity[]> {
    const data = await database('movimentaestoques')
      .select<MovimentacaoEntity[]>('*')
      .where({ id_empresa: idEmpresa })
      .andWhere('data', '>=', startDate)
      .andWhere('data', '<=', endDate)
    return data.map(movimentacao => new MovimentacaoEntity(movimentacao))
  }

  async findByIdReceita(idEmpresa: string, idReceita: string): Promise<MovimentacaoEntity[]> {
    const data = await database('movimentaestoques')
      .select<MovimentacaoEntity[]>('*')
      .where({ id_empresa: idEmpresa })
      .andWhere('id_receita', '=', idReceita)

    return data.map(movimentacao => new MovimentacaoEntity(movimentacao))
  }
}