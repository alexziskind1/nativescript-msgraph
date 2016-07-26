# MS Graph API plugin for NativeScript

***NOTE:*** **This library is a work in progress at this time and is not finished. You can use the authentication part from this library, but the Microsoft Graph API part is not yet complete. You should consider using the [nativescript-office365](https://www.npmjs.com/package/nativescript-office365) npm package instead as a temporary solution while this library is in the works. The nativescript-office365 package will allow you to manually submit REST queries against the same Graph API.**

<img src="docs/images/Today-at-Connect-1.png" alt="MS Graph API"/><br/>

Manage Office 365 Users, Groups, Mail, Calendars, Contacts, Files,
Tasks, People, Notes and more — all from a single endpoint


## Prerequisites

You should have an Office 365 Account admin account. If you don't have one yet, you can get a [free trial here](https://products.office.com/en-us/try).

Register your mobile app [here](https://apps.dev.microsoft.com). This will require you to login with your Office 365 account. You can then click the big "Add an app" button and go through the steps listed there, starting with giving you app a name. On the app creation screen, you need to do 3 things:

1. Click the "Add Platform" button and select "Mobile application"
2. Copy the "Client Id" GUID from the Mobile Application section.
3. Click "Save" at the bottom. 


## Setup

Add TypeScript to your NativeScript project if you don't already have it added. While this is not a requirement, it's highly recommended. If you want to watch a video on how to convert your existing JavaScript based NativeScript app to TypeScript, [watch it here](https://youtu.be/2JDXnduTlgs).

From the command prompt go to your app's root folder and execute:

```
tns plugin add nativescript-msgraph
```

Then open `references.d.ts` in the root of your project and add this line to get autocompletion and type-checking for this plugin:

```
/// <reference path="./node_modules/nativescript-msgraph/msgraph.d.ts" />
```

## Usage

If you want a quickstart, [get the demo app here](https://github.com/alexziskind1/nativescript-msgraph/tree/master/demo).

### Start-up wiring
We need to do some wiring when your app starts, so open `app.ts` and add this before `application.start();`:

##### TypeScript
```js
import * as msGraphModule from 'nativescript-msgraph';

var msGraphInitOptions : msGraphModule.InitOptions = {
    clientId: '<enter GUID here>', //client id for application (GUID)
    scopes: ['Files.ReadWrite']
};
msGraphModule.init(msGraphInitOptions);
```

***Note 1:*** *Enter the client id GUID value that was generated for you when you registered your app in the Prerequisites section.*

***Note 2:*** *The scope listed above gives your NativeScript app SharePoint (OneDrive) file read/write permissions. Add/replace with other scope strings to give your app permissions to do other activities. More scopes are listed [here](https://msdn.microsoft.com/en-us/office/office365/howto/application-manifest)*


## Future work
- Add Android support
- Expose MS Graph Client to consumer


## Credits
The starting point for this plugin was the [NativeScript Plugin Seed](https://github.com/NathanWalker/nativescript-plugin-seed) by [Nathan Walker](https://github.com/NathanWalker).
The MS Graph Client iOS version wouldn't have worked without the iOS ninja expertise of [Jason Zhekov](https://github.com/jasssonpet)