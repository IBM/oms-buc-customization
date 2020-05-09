import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';

import { TranslateService } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import {
  BucCommonClassesAllModuleClazz,
  BucMultiTranslateHttpLoader
} from '@buc/svc-angular';
import { IVHomeComponent } from './ivhome/ivhome.component';
import { OMSHomeComponent } from './omshome/omshome.component';

export class OmsBucCustomizationHomeModuleBundles {
  static bundles: Array<any> = [{
    prefix: './assets/oms-buc-customization/i18n/home/ivhome/',
    suffix: '.json'
  },
  {
    prefix: './assets/oms-buc-customization/i18n/home/omshome/',
    suffix: '.json'
  }];
}

export function omsBucCustomizationHomeModuleHttpLoaderFactory(http: HttpClient) {
  return new BucMultiTranslateHttpLoader(http, OmsBucCustomizationHomeModuleBundles.bundles);
}
/*
  INFO:
  BUC recommends using the multi translate loader for i18n and the superclass for this and every other lazy loaded feature module created
  for proper functioning of the application.
*/
@NgModule({
  declarations: [
    IVHomeComponent,
    OMSHomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: omsBucCustomizationHomeModuleHttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    HomeRoutingModule
  ],
  exports: [],
  providers: [],
  entryComponents: []
})
export class HomeModule extends BucCommonClassesAllModuleClazz {
  constructor(translateService: TranslateService) {
    super(translateService);
  }
}
