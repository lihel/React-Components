const Controller = require('egg').Controller

class HomeController extends Controller {
  async index(a, b) {
    this.ctx.body = 'Hello world'
    return a + b
  }
}

module.exports = HomeController
