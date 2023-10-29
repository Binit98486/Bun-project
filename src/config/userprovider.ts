"use client"
//@ts-ignore
import jwt_decode from "jwt-decode";
import { getToken, getTokenSync } from "./gettoken";
class UserProvider {
    public async getUserIdentityId(): Promise<number> {
        debugger
        try {
            const respToken = await getToken();
            if (respToken == "") {
                return 0;
            }
            let decodedToken: any = jwt_decode(respToken);
            return decodedToken.IdUid;
        }
        catch (error: any) {
            throw error;
        }
    }
    public async getUserName(): Promise<string> {
        try {
            const respToken = await getToken();
            if (respToken == "") {
                return "";
            }
            let decodedToken: any = jwt_decode(respToken);
            return decodedToken.name;
        }
        catch (error: any) {
            throw error;
        }
    }
    public async getUserRoles(): Promise<string[]> {
        try {
            const respToken = await getToken();
            if (respToken == "") {
                return [];
            }
            let decodedToken: any = jwt_decode(respToken);
            return decodedToken.role;
        }
        catch (error: any) {
            throw error;
        }
    }
    public async isUserLoggedIn(): Promise<boolean> {
        try {
            const respToken = await getToken();
            if (respToken == "") {
                return false;
            }
            let decodedToken: any = jwt_decode(respToken);
            if (decodedToken.sub == undefined)
                return false;
            return decodedToken.sub > 0;
        }
        catch (error: any) {
            throw error;
        }
    }

    public isUserLoggedInSync(): boolean {
        try {
            const token = getTokenSync();
            let decodedToken: any = jwt_decode(token);
            if (decodedToken.sub == undefined)
                return false;
            return decodedToken.sub > 0;
        }
        catch (error: any) {
            throw error;
        }
    }
    public async getUserEmail(): Promise<string> {
        try {
            const respToken = await getToken();
            if (respToken == "") {
                return "";
            }
            let decodedToken: any = jwt_decode(respToken);
            return decodedToken.email;
        }
        catch (error: any) {
            throw error;
        }
    }
    public async getUserFirstName(): Promise<string> {
        try {
            const respToken = await getToken();
            if (respToken == "") {
                return "";
            }
            let decodedToken: any = jwt_decode(respToken);
            return decodedToken.name;
        }
        catch (error: any) {
            throw error;
        }
    }
    public async getUserLastName(): Promise<string> {
        try {
            const respToken = await getToken();
            if (respToken == "") {
                return "";
            }
            let decodedToken: any = jwt_decode(respToken);
            return decodedToken.surname;
        }
        catch (error: any) {
            throw error;
        }
    }
    public async getUserProfilePicture(): Promise<string> {
        try {
            const resp = await getToken();
            if (resp == "") {
                return "";
            }
            let decodedToken: any = jwt_decode(resp);
            return decodedToken.picture;
        }
        catch (error: any) {
            throw error;
        }
    }
    public async getUserInfo(): Promise<any> {
        try {
            debugger
            const resp = await getToken();
            if (resp == "") {
                return null;
            }
            let decodedToken: any = jwt_decode(resp);
            return {
                isLoggedIn: decodedToken.sub > 0,
                userId: decodedToken.user,
                role: decodedToken.role,
                exp: decodedToken.exp,
                iat: decodedToken.iat,
                // identityUserId: decodedToken.IdUid,
                // userName: decodedToken.name,
                // email: decodedToken.email,
                // firstName: decodedToken.firstname,
                // lastName: decodedToken.surname,
                // profileImage: decodedToken.picture,
                // role: decodedToken.role,
                // org: decodedToken.org
            };
        }
        catch (error: any) {
            throw error;
        }
    }
    public getUserInfoSync(): any {
        try {
            let token = window.localStorage.getItem('token') != null ? JSON.parse(window.localStorage.getItem('token') ?? "").access_token : null;
            token = token == null ? getToken().then(function (x) {
                token = x;
                let decodedToken: any = jwt_decode(token);
                return {
                    isLoggedIn: decodedToken.sub > 0,
                    identityUserId: decodedToken.IdUid,
                    userName: decodedToken.name,
                    email: decodedToken.email,
                    firstName: decodedToken.firstname,
                    lastName: decodedToken.surname,
                    profileImage: decodedToken.picture,
                    role: decodedToken.role,
                    org: decodedToken.org
                };

            }) : token;
            let decodedToken: any = jwt_decode(token);
            return {
                isLoggedIn: decodedToken.sub > 0,
                identityUserId: decodedToken.IdUid,
                userName: decodedToken.name,
                email: decodedToken.email,
                firstName: decodedToken.firstname,
                lastName: decodedToken.surname,
                profileImage: decodedToken.picture,
                role: decodedToken.role,
                org: decodedToken.org
            };
        }
        catch (error: any) {
            throw error;
        }
    }
    public getUserInitials() {
        try {
            const token = JSON.parse(window.localStorage.getItem('token') ?? "").access_token;
            let decodedToken: any = jwt_decode(token);
            let fullName = `${decodedToken.firstname}  ${decodedToken.surname}`;
            var initials = fullName.replace(/[^a-zA-Z- ]/g, "").match(/\b\w/g);
            return initials?.join('').toUpperCase();
        }
        catch (error: any) {
            return '...'
        }
    }
    public getUserFullName() {

        try {
            const token = JSON.parse(window.localStorage.getItem('token') ?? "").access_token;
            let decodedToken: any = jwt_decode(token);
            let fullName = `${decodedToken.firstname}  ${decodedToken.surname}`;
            return fullName;
        }
        catch (error: any) {
            return '...'
        }
    }
    public getUserRolesList() {
        var roles = localStorage.getItem("userRoles") ?? ""
        var r = JSON.parse(roles);
        return r.Roles;
    }

}
export default new UserProvider();