export class Expense {
  constructor({ desc, category, date, estAmount, actAmount = 0 }) {
    this.desc = desc
    this.category = category
    this.date = date
    this.estAmount = estAmount
    this.actAmount = actAmount
  }
}