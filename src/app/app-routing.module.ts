import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BindingComponent } from './modules/elements/binding/binding.component';
import { DirectiveComponent } from './modules/elements/directive/directive.component';
import { WelcomeComponent } from './modules/home/welcome/welcome.component';



export const ROUTED_COMPONENTS = [
   BindingComponent,
   DirectiveComponent,
   WelcomeComponent
   
   ]
 
const routes: Routes = [
    { path: 'app-binding', component: BindingComponent},
    { path: 'app-directive', component: DirectiveComponent},
    { path: 'app-welcome', component: WelcomeComponent},
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
