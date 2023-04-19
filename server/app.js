"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const log = (message) => console.log(message);
// IMPORTS
const http_1 = __importDefault(require("http"));
// CREATE SERVER INSTANCE
const SERVER = http_1.default.createServer((request, response) => __awaiter(void 0, void 0, void 0, function* () {
    log(`${request.url}\t${request.method}`);
    if (request.url === '/') {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
    }
    // LISTEN ON PORT SPECIFIED PORT
})).listen(5500, () => {
    log('App is running at: http://127.0.0.1:5500');
});
