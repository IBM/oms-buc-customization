import { Component, OnInit } from '@angular/core';
import {
  BucSvcAngularStaticAppInfoFacadeUtil,
  BucBEInvDistributionGroupService
} from '@buc/svc-angular';
/*
  INFO:
    * BucSvcAngularStaticAppInfoFacadeUtil - static utility class with convenience methods.
    * Other services to use IV APIs start with: 'BucBEInv' & 'BucBEInvBuc' e.g.: BucBEInvAvailabilityService, BucBEInvBucDemandService.
*/
@Component({
  selector: 'app-ivhome',
  templateUrl: './ivhome.component.html',
  styleUrls: ['./ivhome.component.scss'],
})
export class IVHomeComponent implements OnInit {
  isIVEnabled = false;
  bucTenantId = '';
  distributionGroupsConfigurationByTenantIdStr = '';

  constructor(public bucBEInvDistributionGroupService: BucBEInvDistributionGroupService) {
  }

  ngOnInit() {
    this.bucTenantId = BucSvcAngularStaticAppInfoFacadeUtil.getSelectedTenantId();
    if (BucSvcAngularStaticAppInfoFacadeUtil.getInventoryEnabled()) {
      this.isIVEnabled = true;
      this.bucBEInvDistributionGroupService.getByTenantIdV1ConfigurationDistributionGroups({
        tenantId: BucSvcAngularStaticAppInfoFacadeUtil.getInventoryTenantId()
      }).subscribe((response) => {
        BucSvcAngularStaticAppInfoFacadeUtil.log('IVHomeComponent', 'ngOnInit', 'getByTenantIdV1ConfigurationDistributionGroups response: ',
            response);
        this.distributionGroupsConfigurationByTenantIdStr = JSON.stringify(response, null, 4);
      },
      (error) => {
        this.distributionGroupsConfigurationByTenantIdStr = null;
        BucSvcAngularStaticAppInfoFacadeUtil.error('IVHomeComponent', 'ngOnInit', 'getByTenantIdV1ConfigurationDistributionGroups error: ',
            error);
      });
    }

  }

}
