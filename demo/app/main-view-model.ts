import {Observable} from 'data/observable';
import * as frameModule from "ui/frame";
import * as msGraphModule from 'nativescript-msgraph';

export class HelloWorldModel extends Observable {
  public message: string;

  constructor() {
    super();
  }

  public onTap() {
    msGraphModule.login()
      .then(()=>{
        console.log('logged in');
        frameModule.topmost().navigate('explorer');
      })
      .catch((er)=>{
        console.log(er);
      });
  }
}