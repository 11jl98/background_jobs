import { database } from '../util/config/database'
import { ClienteEntity } from '../entities/Cliente'

export class ClienteRepo {
  async findBy(idEmpresa: string, idCliente: string): Promise<ClienteEntity> {
  const data = await database('clientes')
    .select<ClienteEntity>(['nome', 'cpfcnpj', 'endereco', 'bairro', 'codibge'])
    .where({ id_empresa: idEmpresa })
    .where({ id_cliente: idCliente })
    .first()

  return new ClienteEntity(data)
}

}
