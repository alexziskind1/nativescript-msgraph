declare module "nativescript-msgraph" {

     /**
     * The options object passed into the init function.
     */
    export interface InitOptions {
        clientId: string;
        scopes: Array<string>;
    }

    export function init(options: InitOptions): Promise<any>;

    //BEGIN Authentication
    export function accessToken() : string;
    export function setClientIdScopes(clientId: string, scopes: Array<string>);
    export function login<T>() : Promise<T>;
    export function logout<T>() : Promise<T>;
    export function accessTokenExpired() : boolean;
    //END Authentication

    //BEGIN
    export function me() : any;
    export function getMyDriveItemsById<T>(id, expandString) : Promise<T>;
    //END
}

