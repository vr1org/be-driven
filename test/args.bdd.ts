import { сценарий, Тест } from "../src";

сценарий("сложение")
  .дано(ПервыйАргументРавен, 5)
  .и(ВторойАргументРавен, 2)
  .когда(Складываю)
  .тогда(РезультатРавен, 7);


сценарий("умножение")
  .дано("рандомный коммент для степа", ПервыйАргументРавен, 3)
  .и(ВторойАргументРавен, 8)
  .когда(Перемножаю)
  .тогда(РезультатРавен, 24);

function ПервыйАргументРавен(this: Тест, a: number): {} {
  return { ПервыйАргумент: a };
}

function ВторойАргументРавен(this: Тест, a: number): {} {
  return { ВторойАргумент: a };
}

function Складываю(this: Тест<{ ПервыйАргумент: number; ВторойАргумент: number }>): {} {
  return { Результат: this.ПервыйАргумент + this.ВторойАргумент };
}

function Перемножаю(this: Тест<{ ПервыйАргумент: number; ВторойАргумент: number }>): {} {
  return { Результат: this.ПервыйАргумент * this.ВторойАргумент };
}

function РезультатРавен(this: Тест<{ Результат: number }>, a: number): void {
  this.ожидаю(this.Результат).равно(a);
}
