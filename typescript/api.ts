import Request, { Ihttp } from "./request";
const http = new Request<number>();

const api = {
    login: (params: Ihttp<number>) => {
        return http.ajax(params);
    },
};

export { api };
