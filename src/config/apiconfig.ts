
let Base_URL = "https://wedding-invitation-acu2.onrender.com";

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
            };
            break;
        case "production":
            apiEndPoints = {
                api: Base_URL + "/api/v1/erp",
                base: "/",
                baseUrl: Base_URL,
            };
            break;

        default:
            apiEndPoints = {
                api: Base_URL + "/api/v1/erp",
                base: "/",
                baseUrl: Base_URL,
            };
    }
    return apiEndPoints;
}
export const ApiEndPoints = getApiEndPoints();