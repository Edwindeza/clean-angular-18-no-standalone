import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalstorageService } from './services/localstorage/localstorage.service';
import { HttpService } from './services/http/http.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HeaderInterceptor } from './interceptor/header.interceptor';

const INTERCEPTORS = [
  HeaderInterceptor
];

const SERVICES = [
  provideHttpClient(
    withInterceptors([...INTERCEPTORS])
  ),
  LocalstorageService,
  HttpService,
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})

export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}

