import { ObservablesComponent } from './modules/elements/observables/observables.component';
import { SubjectsComponent } from './modules/elements/subjects/subjects.component';
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BindingComponent } from './modules/elements/binding/binding.component';
import { DirectiveComponent } from './modules/elements/directive/directive.component';
import { PipeComponent } from './modules/elements/pipe/pipe.component';
import { WelcomeComponent } from './modules/home/welcome/welcome.component';
<<<<<<< HEAD
import { HttpClientsampleComponent } from './components/template/http-clientsample/http-clientsample.component';


=======
import { PersonCrudComponent}  from './modules/person-crud/person-crud.component';
import { PersonCreateComponent} from './components/person/person-create/person-create.component'
>>>>>>> 88b3b5a858d7c1af0b939edb672a61b57ecb7c6f

export const ROUTED_COMPONENTS = [
   BindingComponent,
   DirectiveComponent,
   PipeComponent,
   ObservablesComponent,
   SubjectsComponent,
   WelcomeComponent,
   PersonCrudComponent
   ]
 
const routes: Routes = [
    { path: 'app-binding', component: BindingComponent},
    { path: 'app-directive', component: DirectiveComponent},
    { path: 'app-pipe', component: PipeComponent},
    { path: 'app-observables', component: ObservablesComponent},
    { path: 'app-subjects', component: SubjectsComponent},
    { path: 'app-person-crud', component: PersonCrudComponent},
    { path: 'app-person-create', component: PersonCreateComponent},
    { path: 'app-welcome', component: WelcomeComponent},
<<<<<<< HEAD
    { path: 'app-http-clientsample', component: HttpClientsampleComponent},
    {
        path: '', component: WelcomeComponent
    },
    {
         path:'**',redirectTo:'app-welcome'
    }
=======
    { path: '', component: WelcomeComponent },
    { path:'**',redirectTo:'app-welcome'  },

>>>>>>> 88b3b5a858d7c1af0b939edb672a61b57ecb7c6f
  ] 
 // export const ROUTING = RouterModule.forChild(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
