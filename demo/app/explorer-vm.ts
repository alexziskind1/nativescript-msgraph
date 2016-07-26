import observable = require("data/observable");
import { ObservableArray  } from "data/observable-array";
import * as msGraphModule from 'nativescript-msgraph';

export class ExplorerModel extends observable.Observable {

    public children = new ObservableArray([]);
    private currentId = 'root';

    constructor() {
        super();
        this.loadChildren();
    }


    private onLoadedChildren(children: any) {
        for (var i = 0; i < children.length; i++) {
            this.children.push(children[i]);
        }
    }

    private loadChildren() {
        console.log('loading children');

        msGraphModule.getMyDriveItemsById(this.currentId, 'children')
            .then((response: any)=>{
                if (response.children) {
                    this.onLoadedChildren(response.children);
                }
            })
            .catch((er)=>{
                console.log(er);
            });

/*
        var req: httpModule.HttpRequestOptions = {
            method: "GET",
            url: "https://graph.microsoft.com/v1.0/me/drive/items/root?expand=children",
            headers: {
                Authorization: "Bearer " + msGraphModule.accessToken()
            }
        };
        httpModule.getJSON(req)
            .then((response: any)=>{
                this.processChildren(response.children);
            })
            .catch((er)=>{
                console.log(er);
            })
            */
    }

}