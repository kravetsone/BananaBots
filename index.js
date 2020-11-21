const rq = require("prequest");
const httpBuildQuery = require('http-build-query');
const fastify = require('fastify')
const EventEmitter = require('events');
class Emitter extends EventEmitter {}
class BananaBots {
 constructor(token) {
    this.token = token;
    this.events = new Emitter();
}
async createWebServer(port, https){
    this.app = fastify({https});
await this.call("callback.create", {port: port}).then(async (res) => {
        if(res.error_msg) return console.error("Ошибка при создании веб-сервера: ", res.error_msg);
        this.botip = res.botip;
        this.port = port
    });
this.app.post('/', (req, res) => {
    console.log(req.body)
    if(req.headers["x-forwarded-for"] || req.socket.remoteAddress !== this.botip) return res.send(false);
    this.events.emit(req.body.event, req.body);
    return res.send({answer: true});
});
this.app.listen(port, `0.0.0.0`, (err) => console.log(err));
}
async call(method, params){
return new Promise(async (resolve, reject) => {
    params.token = this.token;
    rq(`https://bananabots.site/api/${method}?${httpBuildQuery(params)}`)
.then((res) => {
    if(res.error_msg){ return reject(res);
    } else {
        return resolve(res);
    }   
}).catch((error) => {
return reject(error)
});
});   
}
}
module.exports = BananaBots;