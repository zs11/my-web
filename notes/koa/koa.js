const http = require('http');
const Emitter = require('events');
const compose = require('koa-compose');

module.exports = class Application extends Emitter {
  constructor() {
    super();
    this.middleware = [];
    this.request = {};
    this.response = {};
    this.context = {};
  }
  listen(...args) {
    const server = http.createServer(this.callback());
    return server.listen(...args);
  }
  use(fn) {
    this.middleware.push(fn);
    return this;
  }
  callback() {
    const fn = compose(this.middleware);
    this.on('error', this.onerror);
    const handleRequest = (req, res) => {
      const ctx = this.createContext(req, res);
      return this.handleRequest(ctx, fn);
    }
    return handleRequest;
  }
  handleRequest(ctx, fnMiddleware) {
    const handleResponse = () => {
      ctx.res.end(ctx.body);
    }
    return fnMiddleware(ctx).then(handleResponse).catch(this.onerror);
  } 
  createContext(req, res) {
    const context = Object.create(this.context);
    const request = context.request = Object.create(this.request);
    const response = context.response = Object.create(this.response);
    context.app = request.app = resopnse.app = this;
    context.req = request.req = req;
    context.res = response.res = res;
    context.state = {};
    return context;
  }
  onerror(err) {
    console.error(err.toString());
  }
}
