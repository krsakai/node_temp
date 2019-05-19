import { Hoge } from './index.js'

class Test {
  public hoge() {
    return " "
  }
}


const test = new Test()
console.log(test.hoge)

const hoge = new Hoge()
console.log(hoge.test())
