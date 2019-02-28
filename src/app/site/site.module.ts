import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';


import { SitelayoutComponent } from '../_layout/sitelayout/sitelayout.component';
import { SiteheaderComponent } from '../_layout/siteheader/siteheader.component';
import { SitefooterComponent } from '../_layout/sitefooter/sitefooter.component';
import { SiteSideNavComponent } from '../_layout/sitesidenav/sitesidenav.component';
import { HomeComponent } from './home/home.component';
import { MaterialModuleModule } from '../lib/material-module/material-module.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EnquiryComponent } from './enquiry/enquiry.component';

@NgModule({
  declarations: [HomeComponent, SitelayoutComponent, SiteheaderComponent, SitefooterComponent, SiteSideNavComponent, PortfolioComponent, EnquiryComponent],
  imports: [
    CommonModule,
    SiteRoutingModule,
    MaterialModuleModule,
    FlexLayoutModule
  ]
})
export class SiteModule { }
