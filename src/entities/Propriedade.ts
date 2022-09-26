export class PropriedadeEntity {
  public idPropriedade: string
  public idEmpresa: string
  public idCliente: string
  public nomepropriedade: string
  public cpfcnpj: string
  public iepr: string
  public rgie: string
  public endereco: string
  public bairro: string
  public numero: string
  public cidade: string
  public UF: string
  public cep: string
  public latitude: string
  public longitude: string
  public codibge: string
  public createdAt: string
  public updatedAt: string

  constructor (props: any) {
    this.idPropriedade = props.id_propriedade
    this.idEmpresa = props.id_empresa
    this.idCliente = props.id_cliente
    this.nomepropriedade = props.nomepropriedade
    this.cpfcnpj = props.cpfcnpj
    this.iepr = props.iepr
    this.rgie = props.rgie
    this.endereco = props.endereco
    this.bairro = props.bairro
    this.numero = props.numero
    this.cidade = props.cidade
    this.UF = props.UF
    this.cep = props.cep
    this.latitude = props.latitude
    this.longitude = props.longitude
    this.codibge = props.codibge
    this.createdAt = props.created_at
    this.updatedAt = props.updated_at
  }
}