import http from "./index";
export interface Ihttp<T> {
    module: "assets" | "auth" | "cc" | "crm" | "csd" | "lp" | "shop" | "tc";
    method:
        | "OPTIONS"
        | "GET"
        | "HEAD"
        | "POST"
        | "PUT"
        | "DELETE"
        | "TRACE"
        | "CONNECT"
        | undefined;
    url: string;
    data: T;
}
export default class request<T> {
    constructor() {}

    ajax(params: Ihttp<T>) {
        return new Promise((resolve, reject) => {
            const { module, method, url, data } = params;
            http[module][method](url, data).then((data: any) => {
                resolve(data);
            });
        });
    }
}
