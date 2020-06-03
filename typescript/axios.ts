/*
 * @Author: your name
 * @Date: 2020-06-03 14:09:25
 * @LastEditTime: 2020-06-03 15:44:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /shengda-wechart/miniprogram/utils/http/test.ts
 */
import axios, { AxiosInstance } from "axios";

export default class axiosServer {
    timeout: number;
    baseURL: string;
    request: AxiosInstance;
    useFunList: Array<{ success: Function; error: Function }>;
    constructor(timeout: number, baseURL: string) {
        this.timeout = timeout;
        this.baseURL = baseURL;
        this.request = this.createRequest(this.baseURL, this.timeout);
        this.useFunList = [];
    }

    private createRequest(baseURL: string, timeout: number): AxiosInstance {
        return axios.create({ baseURL, timeout });
    }
    public useRequest(fun) {
        this.useFunList.push(fun);
    }
}

const test: axiosServer = new axiosServer(6000, "http");
