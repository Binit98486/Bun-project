import axios from "axios";
import { getToken } from "./gettoken";
class RequestManager {
    public async getRequest() {
        // debugger
        const request = axios.create();

        const access_token = await getToken()

        request.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
        request.defaults.headers.common["Content-Type"] =
            "application/json";
        request.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
        return request;
    }
}
export default new RequestManager().getRequest;