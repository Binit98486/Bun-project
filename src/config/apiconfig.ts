
let Base_URL = "http://192.168.18.5:8080";

let apiEndPoints: {
    api: string;
    base: string;
    baseUrl: string;
    supportUrl?: string;
};

function getApiEndPoints() {
    switch (process.env.NODE_ENV) {
        case "development":
            apiEndPoints = {
                api: Base_URL + "/api/v1/erp",
                base: "/",
                baseUrl: Base_URL,
                // supportUrl: Support_Url + "/api/v1/erp",
            };
            break;
        case "production":
            apiEndPoints = {
                api: Base_URL + "/api/v1/erp",
                base: "/",
                baseUrl: Base_URL,
                // supportUrl: Support_Url + "/api/v1/erp"
            };
            break;

        default:
            apiEndPoints = {
                api: Base_URL + "/api/v1/erp",
                base: "/",
                baseUrl: Base_URL,
                // supportUrl: Support_Url + "/api/v1/erp"
            };
    }
    return apiEndPoints;
}
export const ApiEndPoints = getApiEndPoints();