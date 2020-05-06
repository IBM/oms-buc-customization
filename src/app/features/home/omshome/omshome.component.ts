import { Component, OnInit } from '@angular/core';
import {
  BucSvcAngularStaticAppInfoFacadeUtil,
  BucCommOmsRestAPIService
} from '@buc/svc-angular';
/*
  INFO:
    * BucSvcAngularStaticAppInfoFacadeUtil - static utility class with convenience methods.
    * Invoke any OMS API with: this.bucCommOmsRestAPIService.invokeOMSRESTApi().
    * Use for any custom service: this.bucCommOmsRestAPIService.invokeOMSCustomService();
*/
@Component({
  selector: 'app-omshome',
  templateUrl: './omshome.component.html',
  styleUrls: ['./omshome.component.scss'],
})
export class OMSHomeComponent implements OnInit {
  getOrgListJsonStr = '';

  constructor(public bucCommOmsRestAPIService: BucCommOmsRestAPIService) {
  }

  ngOnInit() {
    this.bucCommOmsRestAPIService.invokeOMSRESTApi('getOrganizationList', {}, null).subscribe((response) => {
      BucSvcAngularStaticAppInfoFacadeUtil.log('OMSHomeComponent', 'ngOnInit', 'getOrganizationList response: ', response);
      this.getOrgListJsonStr = JSON.stringify(response, null, 4);
    },
    (error) => {
      this.getOrgListJsonStr = null;
      BucSvcAngularStaticAppInfoFacadeUtil.error('OMSHomeComponent', 'ngOnInit', 'getOrganizationList error: ', error);
    });
  }

}
