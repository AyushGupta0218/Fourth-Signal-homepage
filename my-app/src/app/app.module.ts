import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';


//Material Imports
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { UsdInrComponent } from './features/forex/usd-inr/usd-inr.component';
import { AboutUsComponent } from './core/pages/about-us/about-us.component';
import { FormsModule } from '@angular/forms';
import { UploadComponent } from './features/Upload/upload/upload.component';
import { SofrRateComponent } from './features/forex/sofr_rate/sofr-rate/sofr-rate.component';
import { JpyInrComponent } from './features/forex/jpy-inr/jpy-inr.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { GbpInrComponent } from './features/forex/gbp-inr/gbp-inr.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundComponent,
    UsdInrComponent,
    AboutUsComponent,
    UploadComponent,
    SofrRateComponent,
    JpyInrComponent,
    GbpInrComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    //Material Imports
    MatExpansionModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonToggleModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
