// import { DateTime } from 'luxon'
import { ClienteRepo } from '../repositories/ClienteRepo'
import { EmpresaRepo } from '../repositories/EmpresaRepo'
import { FornecedorRepo } from '../repositories/FornecedorRepo'
import { InfortecnicaReceitaRepo } from '../repositories/InfortecnicaReceitasRepo'
import { MovimentacaoRepo } from '../repositories/MovimentacaoRepo'
import { PropriedadeRepo } from '../repositories/PropriedadeRepo'
import { ReceitaRepo } from '../repositories/ReceitaRepo'
import { NotFoundExeption } from '../util/exceptions/NotFound'
import { ValidationFailedExeption } from '../util/exceptions/ValidationFailed'
import { ISicca } from '../interfaces/sicca'

class SiccaService {

  private empresaRepo = new EmpresaRepo()
  private movimentacaoRepo = new MovimentacaoRepo()
  private fornecedorRepo = new FornecedorRepo()
  private infortecnicaReceitaRepo = new InfortecnicaReceitaRepo()
  private receitaRepo = new ReceitaRepo()
  private clienteRepo = new ClienteRepo()
  private propriedadeRepo = new PropriedadeRepo()

  public async execute(idEmpresa: string, startDate: string, endDate: string) {
    this.validate(idEmpresa, startDate, endDate)
    
    const movimentacoes = await this.findMovBettwenDates(idEmpresa, startDate, endDate)
    const empresa = await this.findByEmpresa(idEmpresa)
    
    const sicca = [] as Array<ISicca>

    for (const movimentacao of movimentacoes) {
      const line = {} as ISicca
      const agrotoxicos = [] as any
      if (movimentacao.tipomovimentacao === 'COMPRA') {
        const fornecedor = await this.fornecedorRepo.findBy(idEmpresa, movimentacao.idFornecedor)
        line.cnpjRevenda = empresa.cpfcnpj
        line.tipoMov = 'ENTRADA'
        line.nfe = movimentacao.notafiscal || ''
        line.serieNfe = movimentacao.serie || ''
        line.data = movimentacao.data || ''
        line.nome = fornecedor.nome
        line.cpfnpj = fornecedor.cpfcnpj
        line.endereco = `${fornecedor.endereco} ${fornecedor.bairro}`
        line.codibge = fornecedor.codibge
        agrotoxicos.push({
          registro: movimentacao.registroagrotoxico,
          quantidade: movimentacao.quantidade,
          codSicca: 21312
        })

        line.agrotoxicos = agrotoxicos
      } else if (movimentacao.tipomovimentacao === 'VENDA') {
        const receita = await this.findByReceita(idEmpresa, movimentacao.idReceita, movimentacao.numerocontrole)
        const cliente = await this.findByCliente(idEmpresa, receita.idCliente, movimentacao.numerocontrole)
        const propriedade = await this.findByPropriedade(idEmpresa, receita.idPropriedade, movimentacao.numerocontrole)

        const movs = await this.findByIdReceita(idEmpresa, movimentacao.idReceita)

        line.cnpjRevenda = empresa.cpfcnpj
        line.tipoMov = 'SAIDA'
        line.nfe = movimentacao.notafiscal
        line.serieNfe = movimentacao.serie
        line.data = movimentacao.datanfe
        line.nome = cliente.nome
        line.cpfnpj = cliente.cpfcnpj
        line.endereco = `${cliente.endereco} ${cliente.bairro}`
        line.codibge = cliente.codibge
        line.nomePropriedade = propriedade.nomepropriedade
        line.codibgePropriedade = propriedade.codibge

        for (const item of movs) {
          agrotoxicos.push({
            registro: item.registroagrotoxico,
            quantidade: item.quantidade,
            codSicca: 21312
          })
        }

        line.agrotoxicos = agrotoxicos
      }

      sicca.push(line)
    }
    return sicca
  }

  private validate(idEmpresa: string, startDate: string, endDate: string) {
    if (!idEmpresa || !startDate || !endDate) {
      throw new ValidationFailedExeption('Valores obrigatórios não passados.')
    }
  }

  private async findByEmpresa(idEmpresa: string) {
    const empresa = await this.empresaRepo.findBy(idEmpresa)

    if (!empresa) {
      throw new NotFoundExeption('Empresa passada não encontrada.')
    }

    return empresa
  }

  private async findByReceita(idEmpresa: string, idReceita: string, numControle: number) {
    if (!idReceita) {
      throw new NotFoundExeption('receita não encontrada. controle ' + numControle)
    }
    const receita = await this.receitaRepo.findBy(idEmpresa, idReceita)

    if (!receita) {
      throw new NotFoundExeption('receita não encontrada. controle ' + numControle)
    }

    return receita
  }

  private async findByCliente(idEmpresa: string, idCliente: string, numControle: number) {
    if (!idCliente) {
      throw new NotFoundExeption('cliente não encontrado. controle ' + numControle)
    }

    const cliente = await this.clienteRepo.findBy(idEmpresa, idCliente)

    if (!cliente) {
      throw new NotFoundExeption('cliente não encontrado. controle ' + numControle)
    }

    return cliente
  }

  private async findByPropriedade(idEmpresa: string, idPropriedade: string, numControle: number) {
    const propriedade = await this.propriedadeRepo.findBy(idEmpresa, idPropriedade)

    if (!propriedade) {
      throw new NotFoundExeption('propriedade não encontrado. controle ' + numControle)
    }

    return propriedade
  }

  private async findByInfortec(idEmpresa: string, idInfortecnica: string, numControle: number) {
    const infortec = await this.infortecnicaReceitaRepo.findAll(idEmpresa, idInfortecnica)

    if (!infortec) {
      throw new NotFoundExeption('infortec não encontrada. controle ' + numControle)
    }

    return infortec
  }

  private async findMovBettwenDates(idEmpresa: string, startDate: string, endDate: string) {
    const movimentacoes = await this.movimentacaoRepo.findBy(idEmpresa, startDate, endDate)
    return movimentacoes
  }

  private async findByIdReceita(idEmpresa: string, idReceita: string) {
    const movimentacoes = await this.movimentacaoRepo.findByIdReceita(idEmpresa, idReceita)
    return movimentacoes
  }
}
export default new SiccaService ()
