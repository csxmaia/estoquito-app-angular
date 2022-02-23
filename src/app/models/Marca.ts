export default class Marca {
  constructor(
    public id?: number,
    public nome?: string,
    public descricao?: string
  ) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
  }
}
