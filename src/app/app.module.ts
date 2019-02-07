import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; 
import { HttpClientModule } from '@angular/common/http';

import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './lib/material-module/material-module.module';

import { DataServiceApiService } from './services/data-service-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitelayoutComponent } from './_layout/sitelayout/sitelayout.component';
import { SiteheaderComponent } from './_layout/siteheader/siteheader.component';
import { SitefooterComponent } from './_layout/sitefooter/sitefooter.component';
import { AppheaderComponent } from './_layout/appheader/appheader.component';
import { AppfooterComponent } from './_layout/appfooter/appfooter.component';
import { ApplayoutComponent } from './_layout/applayout/applayout.component';

@NgModule({
  declarations: [
    AppComponent,
    SitelayoutComponent,
    SiteheaderComponent,
    SitefooterComponent,
    AppheaderComponent,
    AppfooterComponent,
    ApplayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModuleModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [DataServiceApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);