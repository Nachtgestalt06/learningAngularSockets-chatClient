import {SocketIoConfig} from "ngx-socket-io";

export const environment = {
  production: true
};

export const BASE_URL = 'http://localhost:5000';

export const config: SocketIoConfig = { url: BASE_URL, options: {} };
