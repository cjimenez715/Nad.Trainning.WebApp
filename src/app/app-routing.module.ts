import { ObservablessComponent } from './modules/elements/observabless/observabless.component';
import { SubjectssComponent } from './modules/elements/subjectss/subjectss.component';
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BindingComponent } from './modules/elements/binding/binding.component';
import { DirectiveComponent } from './modules/elements/directive/directive.component';
import { PipeComponent } from './modules/elements/pipe/pipe.component';
import { WelcomeComponent } from './modules/home/welcome/welcome.component';
import { HttpClientsampleComponent } from './components/template/http-clientsample/http-clientsample.component';



export const ROUTED_COMPONENTS = [
   BindingComponent,
   DirectiveComponent,
   PipeComponent,
   ObservablessComponent,
   SubjectssComponent,
   WelcomeComponent
   
   ]
 
const routes: Routes = [
    { path: 'app-binding', component: BindingComponent},
    { path: 'app-directive', component: DirectiveComponent},
    { path: 'app-pipe', component: PipeComponent},
    { path: 'app-observabless', component: ObservablessComponent},
    { path: 'app-subjectss', component: SubjectssComponent},
    { path: 'app-welcome', component: WelcomeComponent},
    { path: 'app-http-clientsample', component: HttpClientsampleComponent},
    {
        path: '', component: WelcomeComponent
    },
    {
         path:'**',redirectTo:'app-welcome'
    }
  ] 
 // export const ROUTING = RouterModule.forChild(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
