import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { SitelayoutComponent } from './_layout/sitelayout/sitelayout.component';
// import { ApplayoutComponent } from './_layout/applayout/applayout.component';


const routes: Routes = [
//Site routes goes here 
  { 
    path: 'site', 
    loadChildren: './site/site.module#SiteModule'
  },

  // App routes goes here here
  // { 
  //   path: '',
  //   component: ApplayoutComponent, 
  //   children: [

  //   ]
  // },
  {
    path: '',
    redirectTo: 'site',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
