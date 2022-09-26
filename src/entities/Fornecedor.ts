class FornecedorEntity {
  public idFornecedor: string
  public idEmpresa: string
  public nome: string
  public nomefantasia: string
  public cpfcnpj: string
  public endereco: string
  public bairro: string
  public numero: string
  public cidade: string
  public UF: string
  public cep: string
  public telefone: string
  public email: string
  public ie: string
  public observacao: string
  public codibge: string
  public createdAt: string
  public updatedAt: string

  constructor (props: any) {
    this.idFornecedor = props.id_fornecedor
    this.idEmpresa = props.id_empresa
    this.nome = props.nome
    this.nomefantasia = props.nomefantasia
    this.cpfcnpj = props.cpfcnpj
    this.endereco = props.endereco
    this.bairro = props.bairro
    this.numero = props.numero
    this.cidade = props.cidade
    this.UF = props.UF
    this.cep = props.cep
    this.telefone = props.telefone
    this.email = props.email
    this.ie = props.ie
    this.observacao = props.observacao
    this.codibge = props.codibge
    this.createdAt = props.created_at
    this.updatedAt = props.updated_at
  }
}

export { FornecedorEntity }