import Marca from "./Marca";
import Categoria from "./Categoria";

export default class Produto {
  constructor(
    public id?: number,
    public ean?: string,
    public nome?: string,
    public quantidadeEstoque?: string,
    public quantidadeMinima?: string,
    public tipoEmbalagem?: string,
    public valorVenda?: string,
    public descricao?: string,
    public marca?: Marca,
    public categoria?: Categoria
  ) {
    this.id = id;
    this.ean = ean;
    this.nome = nome;
    this.quantidadeEstoque = quantidadeEstoque;
    this.quantidadeMinima = quantidadeMinima;
    this.tipoEmbalagem = tipoEmbalagem;
    this.valorVenda = valorVenda;
    this.descricao = descricao;
    this.marca = marca;
    this.categoria = categoria;
  }
}
