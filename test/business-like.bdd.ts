import { дано } from "../src";

var initiator = "TestUsers.Ardo";
var approver = "TestUsers.Ivanovsky";

дано(УМеняЕстьДокумент, initiator)
  .и(ПодписантИмеетЭлектроннуюПодпись, approver)
  .когда(ЯСтартуюЗадачуНаПодписание, initiator)
  .когда(ПользовательПодписывает)
  .тогда(ДокументПодписан, approver);


function УМеняЕстьДокумент(author: string): void {

}
