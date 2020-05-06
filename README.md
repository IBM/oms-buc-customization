# OmsBucCustomization

This project is created as a quick start project for the BUC customization teams. It follows our documented conventions for application development in BUC and will be used by the teams to validate their BUC customization configuration. Once the initial setup is complete and teams are able to launch the application in BUC, they will use this as the foundation for further application development.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Main setup

1. Setup your development environment by installing the latest version of [Node.js](https://nodejs.org/en/download/releases/) LTS 10.x series. If multiple node versions are required, it will be preferable to use [nvm](https://github.com/nvm-sh/nvm) (for Mac or Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows) (for Windows).
2. Install [Git](https://git-scm.com/).
3. Install [Yarn](https://yarnpkg.com/en/docs/install).
4. Preferably complete: [Connecting to GitHub with SSH](https://help.github.com/en/articles/connecting-to-github-with-ssh)
5. `npm install -g @angular/cli@8.3.3`: Install Angular CLI 8.3.3 globally.
6. `git clone git@github.com:IBM/oms-buc-customization.git`: Clone oms-buc-customization git repo.
7. Rename the currently checked out project folder (`oms-buc-customization`) with the new name that was chosen for your custom git repository. Let us assume the name chosen was: `custom-oms-buc-customization`. So, this would be the name for the folder.
8. `cd custom-oms-buc-customization`: Enter the directory.
9. Remove the reference of the old repository name `oms-buc-customization` from all the files like `package.json`, `readme`, `angular.json`, routing files etc. and use the new name for the repository used in `step8`: `custom-oms-buc-customization`. You can use and editor of choice like Visual Studio Code to do this.
10. Change the title in `README.md` and `index.html` from `OmsBucCustomization` to the required value like: `CustomOmsBucCustomization`.
11. The files `app.module.ts` and `home.module.ts` contain 2 method and 2 classname references each, that start with `OmsBucCustomization` and `omsBucCustomization`. These will need to be updated to the new naming convention as well and will start with: `CustomOmsBucCustomization` and `customOmsBucCustomization`.
12. Rename the folder used for i18n files: `/src/assets/oms-buc-customization` as `/src/assets/custom-oms-buc-customization`.
13. `ng config -g cli.packageManager yarn`: Set yarn as the package manager for this Angular CLI based project.
14. `yarn install`: Install all dependencies using Yarn.
    * To clear complete yarn cache, use: `yarn cache clean`
    * To ignore cache and add any dependency use: `yarn add <any dependency name> --force`
15. Do this in case newly created target git repo (`git@github.com:IBM/custom-oms-buc-customization.git`) does not have any content (it was not initialized with readme etc.). In the terminal or git bash where current directory is the renamed project folder: `custom-oms-buc-customization`, run the following commands:
    * `git remote set-url origin git@github.com:IBM/custom-oms-buc-customization.git` - this sets the remote for the current folder as our new repository created assuming `git@github.com:IBM/custom-oms-buc-customization.git` is the new repository.
    * `git push -u origin develop` (as the default branch is develop on **oms-buc-customization**) - this will push all changes to develop branch on the new repository as well.
    * This will retain the history of the original reference repo: `git@github.com:IBM/oms-buc-customization.git`. If required, those can be removed. Alternately, **point16** can be used if retaining history is not desired.
16. In case the newly created target git repo (`git@github.com:IBM/custom-oms-buc-customization.git`) has some content, or the refernce repo history is not desired:
    * Change to a temp parent folder: `mkdir temp` and `cd temp`
    * Clone the new repo here: `git clone git@github.com:IBM/custom-oms-buc-customization.git`
    * Copy all the content under the folder `custom-oms-buc-customization` created in above steps, except the `.git` and `node_modules` folders and paste it to `temp/custom-oms-buc-customization`. Reconcile/merge the files and content as required.
    * `yarn install`
    * Create a new branch, commit all changes, push it and merge with develop branch.
17. Refer wiki for additional information on recommended branches: [Application git setup](https://github.ibm.com/WCI/oms-buc-customization/wiki/Application-git-setup).

## Mapping localhost to bucgenerichost

* To enable local development, BUC enables requests to come from `bucgenerichost`. The `localhost` needs to be mapped to this host name so that local angular development server can contact BUC. This will need to be done by every developer.
* Locate the `hosts` file on your machine (admin or root/sudo access required):
    * Windows 10: `C:\Windows\System32\drivers\etc\hosts`
    * Linux: `/etc/hosts`
    * Mac: `/etc/hosts`
* Add the new hostname after existing entry(s) for localhost: `127.0.0.1 localhost bucgenerichost` and save.
* The `package.json` has `--host=bucgenerichost` entry in the `start` script to enable local angular server to start with host name as `bucgenerichost`.

## Starting the app server for local development

`yarn start`: This will start the local development server over https at: `https://bucgenerichost:9000/oms-buc-customization`.
* Once the BUC Customization entry for the application is provided details on wiki [here](https://github.ibm.com/WCI/oms-buc-customization/wiki/Custom-feature-ribbon-entry-for-DEV-tenant-per-customization-developer), it can be accessed from the ribbon in BUC with local development mode enabled on a DEV tenant.
* Since this angular https server does not have a valid certificate, on every server start, you will not be able to immediately view the application in BUC on clicking on the option in the ribbon. A temporary exception in browser for this certificate will be needed:
    1. Copy the url above in a new tab and accept the certificate error - this creates the exception in browser for the certificate.
    2. Click on the ribbon entry for your application again and now the content will be loaded in BUC.
* This certificate issue will not occur on the BUC hosted url - once local development mode is disabled or on a non-DEV tenant.

**NOTE**: The application is designed to be rendered inside the shell as it provides user authentication, authorization and other security features, so the application tab will remain blank if `https://bucgenerichost:9000/oms-buc-customization` or the BUC hosted url is accessed outside shell in a new tab except for accepting certificate exception for DEV tenant.

## Adding ribbon entry in BUC

Completing this step will add a ribbon entry in BUC that can be used to access the custom application running locally.
The steps and the corresponding content to be provided are detailed in the wiki page: [Custom feature ribbon entry for DEV tenant per customization developer](https://github.ibm.com/WCI/oms-buc-customization/wiki/Custom-feature-ribbon-entry-for-DEV-tenant-per-customization-developer)

## Uploading build artifacts to BUC

Once feature development reaches some milestone, it would be merged into one of the main branches created.
CI-CD pipeline can be used for building the artifacts on the main branches and uploading them to git. The wiki page [Uploading build artifacts to BUC](https://github.ibm.com/WCI/oms-buc-customization/wiki/Uploading-build-artifacts-to-BUC) explains this in detail.