"use client"
import axios from "axios";
const qs = require("qs");
//@ts-ignore
import jwt_decode from "jwt-decode";
import { ApiEndPoints } from "./apiconfig";
interface ApiResponse {
    access_token?: string;
    code: number;
    message: string;

}

export default class TokenManager {
    public async GetToken(): Promise<ApiResponse> {
        try {
            var url = ApiEndPoints.baseUrl + '/connect/token';
            var param = {
                client_id: 'client',
                client_secret: 'secret',
                grant_type: 'client_credentials'
            }
            const res = await axios.post(url, qs.stringify(param)
            );
            const response = await res.data;
            window.localStorage.setItem("token", JSON.stringify(response));
            return {
                access_token: response.access_token, code: 200, message: ""
            };
        } catch (error: any) {
            return {
                access_token: "null", code: 500, message: "network error"
            };
        }
    }
}

export async function getToken(): Promise<string> {
    let token =
        window.localStorage.getItem("token") != null && window.localStorage.getItem("token") != ""
            ? JSON.parse(window.localStorage.getItem("token") ?? "").access_token
            : null;
    const tokenManager = new TokenManager();
    if (token == null || token == "" || token == undefined) {
        //first case
        var a = await tokenManager.GetToken();
        return a.access_token ?? "";
    } else {
        let decodedToken: any = jwt_decode(token);
        if (Date.now() >= decodedToken.exp * 1000) {
            var a = await tokenManager.GetToken();
            return a.access_token ?? "";
        } else {
            return token;
        }
    }
}

export function getTokenSync(): string {
    let token =
        window.localStorage.getItem("token") != null && window.localStorage.getItem("token") != ""
            ? JSON.parse(window.localStorage.getItem("token") ?? "").access_token
            : null;
    const tokenManager = new TokenManager();
    if (token == null || token == "" || token == undefined) {
        //first case
        var a: any = null;
        tokenManager.GetToken().then(function (x) {
            a = x;
            return x.access_token;
        });
        // return a.access_token;
    } else {
        let decodedToken: any = jwt_decode(token);
        if (Date.now() >= decodedToken.exp * 1000) {
            var a: any = null;
            tokenManager.GetToken().then(function (x) {
                a = x;
                return x;
            });
            return a.access_token;
        } else {
            return token;
        }
    }
    return token;
}
export function setToken(token: string) {
    return window.localStorage.setItem("token", token);
}

export function isTokenExpired(token: string) { }