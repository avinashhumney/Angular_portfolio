import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from '../main/user/homepage/homepage.component';
import { SidebarComponent } from '../main/common/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
