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

@NgModule({
  declarations: [
    AppComponent,
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