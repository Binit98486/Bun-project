import { ApiEndPoints } from "../config/apiconfig";
import request from "../config/request";

const qs = require("qs");
interface ApiResponse {
    data?: any;
    Message: string;
    Code: number;
}

class AllService {
    public async Get(API: string, pageNo?: number, pageSize?: number, query?: string): Promise<ApiResponse> {
        try {

            const response = await (await request()).get(ApiEndPoints.api + API + "?page=" + pageNo + "size=" + pageSize + "&query=" + query)
            return response.data

        } catch (error: any) {
            return {
                Message: error.error,
                data: null,
                Code: error.Code
            }

        }
    }
    public async Post(API: string, formData: any): Promise<ApiResponse> {
        try {
            const response = await (await request()).post(ApiEndPoints.api + API, qs.stringify(formData))
            return response.data

        } catch (error: any) {
            return {
                Message: error.Message,
                data: null,
                Code: error.Code
            }

        }
    }
    public async Delete(API: string, id: number): Promise<ApiResponse> {
        try {
            const response = await (await request()).post(ApiEndPoints.api + API + "?id=" + id)
            return response.data

        } catch (error: any) {
            return {
                Message: error.Message,
                data: null,
                Code: error.Code
            }

        }
    }
    public async Login(API: string, email: string, phone: string, password: string): Promise<ApiResponse> {
        debugger
        try {
            const response = await (await request()).post(ApiEndPoints.api + API + "?email=" + email + "&phone=" + phone + "&password=" + password)
            return response.data

        } catch (error: any) {
            return {
                Message: error.Message,
                data: null,
                Code: error.Code
            }

        }
    }
}

export default new AllService()