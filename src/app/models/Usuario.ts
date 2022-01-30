export default class Usuario {
  constructor(
    public id?: number,
    public usuario?: string,
    public senha?: string
  ) {
    this.id = id;
    this.usuario = usuario;
    this.senha = senha;
  }
}
