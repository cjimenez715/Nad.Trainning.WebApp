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
import { PipeComponent } from './modules/elements/pipe/pipe.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { ObservablesComponent } from './modules/elements/observables/observables.component';
import { SubjectsComponent } from './modules/elements/subjects/subjects.component';
import { PersonCrudComponent } from './modules/person-crud/person-crud.component';
import { PersonCreateComponent } from './components/person/person-create/person-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ROUTED_COMPONENTS,
    DirectiveComponent,
    BindingComponent,
    WelcomeComponent,
    PipeComponent,
    RedDirective,
    ForDirective,
    UppercasePipe,
    ObservablesComponent,
    SubjectsComponent,
    PersonCrudComponent,
    PersonCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule, 
    MatTableModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule
    //ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
