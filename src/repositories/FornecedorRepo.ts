import { database } from '../util/config/database'
import { FornecedorEntity } from '../entities/Fornecedor'

export class FornecedorRepo {
  async findBy(idEmpresa: string, idFornecedor: string): Promise<FornecedorEntity> {
    const data = await database('fornecedors')
      .select<FornecedorEntity>(['cpfcnpj', 'nome', 'endereco', 'bairro', 'codibge'])
      .where({ id_empresa: idEmpresa })
      .andWhere({ id_Fornecedor: idFornecedor })
      .first()

    return new FornecedorEntity(data)
  }
}

