import request from '../config/request';
import { ApiEndPoints } from '../config/apiconfig';
import userprovider from '../config/userprovider';
import jwt_decode from "jwt-decode";

const qs = require('qs')
interface ApiResponse {
    error: boolean;
    Message: string;
    Data?: any;
}
class LoginService {
    public async Login(formData: any): Promise<ApiResponse> {
        try {
            const res = await (await request()).post(ApiEndPoints.api + "/login", JSON.stringify(formData));
            debugger
            if (res.data.error == false) {
                window.localStorage.setItem(
                    "token",
                    JSON.stringify({ access_token: res.data.data.access_token })
                );
                let decodedToken: any = jwt_decode(res.data.data.access_token);
                window.localStorage.setItem(
                    "userId", decodedToken.user
                )
                window.localStorage.setItem('Role', decodedToken.role)
            }
            return await res.data;
        }
        catch (error: any) {
            return {
                Message: error.message,
                error: error.message,
                Data: null
            }
        }
    }
    public async checkIfAuthorized(): Promise<boolean> {
        let userInfo = await userprovider.getUserInfo();
        if (userInfo == null) {
            return false;
        }
        if (userInfo.isLoggedIn == false) {
            return false;
        } else {
            return true;
        }
    }
    public async logout() {
        window.localStorage.setItem(
            "token",
            ""
        );
    }

}


export default new LoginService();