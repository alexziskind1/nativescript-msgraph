import * as application from 'application';
import * as msGraphModule from 'nativescript-msgraph';

var msGraphInitOptions : msGraphModule.InitOptions = {
    clientId: '52e97c5d-113d-4447-8d28-4890855ea8f2', //client id for application (GUID)
    scopes: ['Files.ReadWrite']
};
msGraphModule.init(msGraphInitOptions);

application.start({ moduleName: 'main-page' });
