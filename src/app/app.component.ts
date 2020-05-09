import { Component, OnInit } from '@angular/core';
import {
  BucCommonClassesAppComponentClazz,
  BucSvcAngularStaticAppInfoFacadeUtil
} from '@buc/svc-angular';
/*
  INFO:
  The content in this class is the recommended content for proper functioning of the application. More content can be added
  but this must be retained.

  4 methods marked: "// Mandatory method. Do not remove." - must be retained.
  3 attributes: isBucTenantChangeSuccess, isBucJwtRefreshSuccess, isInitialState are obtained from the superclass.
  Superclass must be retained.
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BucCommonClassesAppComponentClazz implements OnInit {

  // Obtained from superclass: isBucTenantChangeSuccess, isBucJwtRefreshSuccess, isInitialState

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  // Mandatory method. Do not remove.
  handleBucTenantChange(msg) {
    BucSvcAngularStaticAppInfoFacadeUtil.log('AppComponent', 'handleBucTenantChange',
        'isBucTenantChangeSuccess$ published with value as "true", tenant details available');
  }

  // Mandatory method. Do not remove.
  handleBucTenantChangeFailure(errorObj) {
    BucSvcAngularStaticAppInfoFacadeUtil.error('AppComponent', 'handleBucTenantChangeFailure', 'bucTenantChangeFailure$.', errorObj);
  }

  // Mandatory method. Do not remove.
  handleBucJwtRefresh(msg) {
    BucSvcAngularStaticAppInfoFacadeUtil.log('AppComponent', 'handleBucJwtRefresh',
        'isBucJwtRefreshSuccess$ published with value as "true". The interceptor/wrapper will handle Shell JWT and BUC JWTs now.');
  }

  // Mandatory method. Do not remove.
  handleBucJwtRefreshFailure(errorObj) {
    BucSvcAngularStaticAppInfoFacadeUtil.error('AppComponent', 'handleBucJwtRefreshFailure', 'bucJwtRefreshFailure$.', errorObj);
  }
}
