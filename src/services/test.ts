import { ApiEndPoints } from "../config/apiconfig";
import request from "../config/request";

// const qs = require("qs");
interface ApiResponse {
    Data?: any;
    Message: string;
    Code: number;
}
let API = {
    List: ApiEndPoints.api + "/locations/list",
    Save: ApiEndPoints.api + "/locations/save",
    PalikaList: ApiEndPoints.api + '/nepallocation/list/palika',
    DistrictList: ApiEndPoints.api + "/nepallocation/list/districts",
    Test: ApiEndPoints.api + "/users",
    GroomList: ApiEndPoints.api + "/grooms"


}

class LocationService {

    // public async getLocationList(offset: number,
    //     limit: number, roadType: string,
    //     query: string): Promise<ApiResponse> {
    //     try {
    //         const res = await (await request()).get(API.List + "?pageNo=" +
    //             offset +
    //             "&pageSize=" +
    //             limit + "&RoadType=" + roadType +
    //             "&query=" +
    //             query)
    //         return await res.data

    //     } catch (error: any) {
    //         return {
    //             Message: error.Message,
    //             Code: 404,
    //             Data: null
    //         }

    //     }

    // }

    // public async getPalika(): Promise<ApiResponse> {
    //     try {
    //         var res = await (await request()).get(API.PalikaList)
    //         return await res.data
    //     } catch (error: any) {
    //         return {
    //             Message: error.Message,
    //             Code: error.Code,
    //             Data: null
    //         }

    //     }
    // }

    public async GetUser(): Promise<ApiResponse> {
        try {
            var resp = await ((await request()).get(API.Test))
            return await resp.data



        } catch (error: any) {
            return {
                Message: error.Message,
                Code: error.Code,
                Data: null

            }

        }
    }
}
export default new LocationService()