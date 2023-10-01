import { ApiEndPoints } from "../config/apiconfig";
import request from "../config/request";
interface ApiResponse {
    data?: any;
    error: boolean;
    message: string;
}

class AllService {
    public async Get(API: string, pageNo?: number, pageSize?: number, query?: string): Promise<ApiResponse> {
        try {

            const response = await (await request()).get(ApiEndPoints.api + API + "?page=" + pageNo + "size=" + pageSize + "&query=" + query)
            return response.data

        } catch (error: any) {
            return {
                error: error.error,
                data: null,
                message: error.message
            }

        }
    }
    public async Post(API: string, formData: any): Promise<ApiResponse> {
        try {
            const response = await (await request()).post(ApiEndPoints.api + API, JSON.stringify(formData))
            return response.data

        } catch (error: any) {
            return {
                error: error.error,
                data: null,
                message: error.message
            }

        }
    }
    public async Delete(API: string, id: number): Promise<ApiResponse> {
        try {
            const response = await (await request()).post(ApiEndPoints.api + API + "?id=" + id)
            return response.data

        } catch (error: any) {
            return {
                error: error.error,
                data: null,
                message: error.message
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
                error: error.error,
                data: null,
                message: error.message
            }

        }
    }
}

export default new AllService()