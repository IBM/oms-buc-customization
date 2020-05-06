import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucSvcAngularModule } from '@buc/svc-angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import {
  BucCommonClassesAllModuleClazz,
  BucCommShellStaticPatternIframeService,
  BucCommBEHttpInterceptorService,
  BucMultiTranslateHttpLoader
} from '@buc/svc-angular';

import { AppComponent } from './app.component';

export class OmsBucCustomizationAppModuleBundles {
  static bundles: Array<any> = [{
      prefix: './assets/oms-buc-customization/i18n/',
      suffix: '.json'
  }];
}

export function omsBucCustomizationAppModuleHttpLoaderFactory(http: HttpClient) {
  return new BucMultiTranslateHttpLoader(http, OmsBucCustomizationAppModuleBundles.bundles);
}
/*
  INFO:
  The content in this class is the recommended content for proper functioning of the application - multi translate loader for i18n,
  interceptor and superclass.
  More content can be added but this must be retained.
*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    BucSvcAngularModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
          useFactory: omsBucCustomizationAppModuleHttpLoaderFactory,
          deps: [HttpClient]
      },
      isolate: true
    }),
    AppRoutingModule
  ],
  providers: [
    // Any other interceptor added by oms-buc-customization to be added before.
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BucCommBEHttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule extends BucCommonClassesAllModuleClazz {
  constructor(translateService: TranslateService,
              bucCommShellStaticPatternIframeService: BucCommShellStaticPatternIframeService) {
    super(translateService, bucCommShellStaticPatternIframeService);
  }
}
