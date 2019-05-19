export class Hoge {
  constructor(name: string = "") {
    this.hoge = name
  }

  public hoge: string
  public test(): string {
    return "test"
  }
}
