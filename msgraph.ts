import * as applicationModule from 'application';
import * as utils from 'utils/utils';
import {InitOptions} from "nativescript-msgraph";
import {MsGraphAuth} from './msgraph-auth';
import { invokeOnRunLoop } from './async-helper';

class MsGraph {
  public auth: MsGraphAuth;
  public accessToken: string;

  public get client() {
      return this.auth.client;
  }

  constructor() {
      this.auth = new MsGraphAuth();
  }
}

export var instance : MsGraph = null;

export function init(options: InitOptions) : Promise<any> {
  return new Promise(function (resolve, reject) {
    try {
      if (instance !== null) {
        reject("You already ran init");
        return;
      }

      instance = new MsGraph();
      instance.auth.setClientIdScopes(options.clientId, options.scopes);
      resolve(instance);
    } catch (ex) {
      console.log("Error in MsGraph.init: " + ex);
      reject(ex);
    }
  });
}

//BEGIN Authentication
export function accessToken() : string {
    return instance.auth.accessToken;
}
export function setClientIdScopes(clientId: string, scopes: Array<string>) {
    instance.auth.setClientIdScopes(clientId, scopes);
}
export function login<T>() : Promise<T> {
    return instance.auth.login();
}
export function logout<T>() : Promise<T> {
    return instance.auth.logout();
}
export function accessTokenExpired() : boolean {
    return instance.auth.accessTokenExpired();
}
//END Authentication

//BEGIN
export function me() {
    return instance.client.me();
}

export function getMyDriveItemsById(id, expandString) {
    var childrenRequest = instance.client.me().drive().items(id).request().expand(expandString);
    return new Promise<void>((resolve, reject)=>{
            childrenRequest.getWithCompletion((response, nextRequest, error) => {
                invokeOnRunLoop(()=>{
                    if (!error){
                        if (response){
                            resolve(response);
                        }
                    }
                    else if (error.isAuthenticationError) {
                        this.showErrorAlert(error);
                        reject(error);
                    }
                });
            });
        });
}
//END