export class ClienteEntity {
  public idCliente: string
  public idEmpresa: string
  public nome: string
  public cpfcnpj: string
  public endereco: string
  public bairro: string
  public numero: string
  public cidade: string
  public UF: string
  public cep: string
  public telefone: string
  public email: string
  public iepr: string
  public observacao: string
  public rgie: string
  public status: string
  public codibge: string
  public createdAt: string
  public updatedAt: string

  constructor (props: any) {
    this.idCliente = props.id_cliente
    this.idEmpresa = props.id_empresa
    this.nome = props.nome
    this.cpfcnpj = props.cpfcnpj
    this.endereco = props.endereco
    this.bairro = props.bairro
    this.numero = props.numero
    this.cidade = props.cidade
    this.UF = props.UF
    this.cep = props.cep
    this.telefone = props.telefone
    this.email = props.email
    this.iepr = props.iepr
    this.observacao = props.observacao
    this.rgie = props.rgie
    this.status = props.status
    this.codibge = props.codibge
    this.createdAt = props.created_at
    this.updatedAt = props.updated_at
  }
}