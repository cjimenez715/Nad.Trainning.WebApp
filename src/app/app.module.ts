import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, ROUTED_COMPONENTS } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
//import { ROUTED_COMPONENTS, ROUTING } from './app.routing';
import { DirectiveComponent } from './modules/elements/directive/directive.component';
import { BindingComponent } from './modules/elements/binding/binding.component';
import { WelcomeComponent } from './modules/home/welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ROUTED_COMPONENTS,
    DirectiveComponent,
    BindingComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule, 
    MatTableModule,
    FormsModule
    //ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
