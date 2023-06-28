import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { UsdInrComponent } from './features/forex/usd-inr/usd-inr.component';
import { JpyInrComponent } from './features/forex/jpy-inr/jpy-inr.component';
import { AboutUsComponent } from './core/pages/about-us/about-us.component';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './features/Upload/upload/upload.component';
import { SofrRateComponent } from './features/forex/sofr_rate/sofr-rate/sofr-rate.component';
import { GbpInrComponent } from './features/forex/gbp-inr/gbp-inr.component';
const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'dashboard'
    
  },

  {
    path: 'dashboard',
    component: HomePageComponent,
    canActivate: [],
    children:[
      {
        path: '',
         redirectTo:'about-us',
         pathMatch:'full'
      },
   
      {
        path: 'usdinr',
        component: UsdInrComponent,   
      },
      {
        path:'about-us',
        component:AboutUsComponent
      },
      {
        path:'upload',
        component:UploadComponent
      },
      {
        path:'jpyinr',
        component:JpyInrComponent,
      },
      {
        path:'sofrrate',
        component:SofrRateComponent,
      },
      {
        path:'gbpinr',
        component:GbpInrComponent,
      }
    ],

  },

   
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { 



}
