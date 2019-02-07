import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitelayoutComponent } from '../_layout/sitelayout/sitelayout.component';
import { HomeComponent } from './home/home.component'

export const routes: Routes = [
    { path: '', component:  SitelayoutComponent,
    children: [
        {
            path: '',
            component: HomeComponent
        }
        
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class SiteRoutingModule { };