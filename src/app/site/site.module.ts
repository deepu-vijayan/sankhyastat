import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';


import { SitelayoutComponent } from '../_layout/sitelayout/sitelayout.component';
import { SiteheaderComponent } from '../_layout/siteheader/siteheader.component';
import { SitefooterComponent } from '../_layout/sitefooter/sitefooter.component';
import { HomeComponent } from './home/home.component';
import { MaterialModuleModule } from '../lib/material-module/material-module.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [HomeComponent, SitelayoutComponent, SiteheaderComponent, SitefooterComponent, PortfolioComponent],
  imports: [
    CommonModule,
    SiteRoutingModule,
    MaterialModuleModule,
    FlexLayoutModule
  ]
})
export class SiteModule { }
