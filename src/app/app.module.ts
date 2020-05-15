import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';

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

import { HttpClientModule } from '@angular/common/http';

import { ObservablesComponent } from './modules/elements/observables/observables.component';
import { SubjectsComponent } from './modules/elements/subjects/subjects.component';
import { PersonCrudComponent } from './modules/person-crud/person-crud.component';
import { PersonCreateComponent } from './components/person/person-create/person-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { PersonReadComponent } from './components/person/person-read/person-read.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PersonUpdateComponent } from './components/person/person-update/person-update.component';
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
    PersonCreateComponent,
    PersonReadComponent,
    PersonUpdateComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule, 
    MatTableModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule
    //ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
