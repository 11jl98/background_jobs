export class InfortecnicaReceitaEntity {
  public idInfortecnica: string
  public idEmpresa: string
  public idReceita: string
  public aplicacao: string
  public areatratar: string
  public classetoxico: string
  public classificacaocultura: string
  public codcultura: string
  public concentracao: string
  public dosagem: string
  public epi: string
  public epocaaplicacao: string
  public estagiocultura: string
  public fitoxidade: string
  public formulacao: string
  public horario: string
  public nomeembalagem: string
  public tipoembalagem: string
  public unidademmbalagem: string
  public indicacao: string
  public ingredienteativo: string
  public intervaloaplicacao: string
  public intervaloentrada: string
  public intervaloseguranca: string
  public lote: string
  public idAgrotoxico: string
  public idCultura: string
  public modaplicacao: string
  public modoaplicacao: string
  public nomeagrotoxico: string
  public nomecultura: string
  public nomeclasse: string
  public nomeclasseambiental: string
  public nomegrupoquimico: string
  public numeroaplicacoes: string
  public problemacientifico: string
  public problemacomum: string
  public quantembal: string
  public quantidadeadquirir: string
  public registroagrotoxico: string
  public tipoaplicacao: string
  public volumecalda: string
  public volumecaldabula: string
  public dosagembula: string
  public solo: string
  public createdAt: string
  public updatedAt: string

  constructor (props: any) {
    this.idInfortecnica = props.id_infortecnica
    this.idEmpresa = props.id_empresa
    this.idReceita = props.id_receita
    this.aplicacao = props.aplicacao
    this.areatratar = props.areatratar
    this.classetoxico = props.classetoxico
    this.classificacaocultura = props.classificacaocultura
    this.codcultura = props.codcultura
    this.concentracao = props.concentracao
    this.dosagem = props.dosagem
    this.epi = props.epi
    this.epocaaplicacao = props.epocaaplicacao
    this.estagiocultura = props.estagiocultura
    this.fitoxidade = props.fitoxidade
    this.formulacao = props.formulacao
    this.horario = props.horario
    this.nomeembalagem = props.nomeembalagem
    this.tipoembalagem = props.tipoembalagem
    this.unidademmbalagem = props.unidademmbalagem
    this.indicacao = props.indicacao
    this.ingredienteativo = props.ingredienteativo
    this.intervaloaplicacao = props.intervaloaplicacao
    this.intervaloentrada = props.intervaloentrada
    this.intervaloseguranca = props.intervaloseguranca
    this.lote = props.lote
    this.idAgrotoxico = props.id_agrotoxico
    this.idCultura = props.id_cultura
    this.modaplicacao = props.modaplicacao
    this.modoaplicacao = props.modoaplicacao
    this.nomeagrotoxico = props.nomeagrotoxico
    this.nomecultura = props.nomecultura
    this.nomeclasse = props.nomeclasse
    this.nomeclasseambiental = props.nomeclasseambiental
    this.nomegrupoquimico = props.nomegrupoquimico
    this.numeroaplicacoes = props.numeroaplicacoes
    this.problemacientifico = props.problemacientifico
    this.problemacomum = props.problemacomum
    this.quantembal = props.quantembal
    this.quantidadeadquirir = props.quantidadeadquirir
    this.registroagrotoxico = props.registroagrotoxico
    this.tipoaplicacao = props.tipoaplicacao
    this.volumecalda = props.volumecalda
    this.volumecaldabula = props.volumecaldabula
    this.dosagembula = props.dosagembula
    this.solo = props.solo
    this.createdAt = props.created_at
    this.updatedAt = props.updated_at
  }
}