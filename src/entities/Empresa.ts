class EmpresaEntity {
  public idCadastro: string
  public idEmpresa: string
  public nomeempresa: string
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
  public codibge: string
  public createdAt: string
  public updatedAt: string

  constructor (props: any) {
    this.idCadastro = props.id_cadastro
    this.idEmpresa = props.id_empresa
    this.nomeempresa = props.nomeempresa
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
    this.codibge = props.codibge
    this.createdAt = props.created_at
    this.updatedAt = props.updated_at
  }
}

export { EmpresaEntity }