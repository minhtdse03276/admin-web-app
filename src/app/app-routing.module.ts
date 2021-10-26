import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirebaseComponent } from './components/firebase/firebase.component';

const routes: Routes = [
  { path: "", redirectTo: "firebase", pathMatch: "full" },
  { path: "firebase", component: FirebaseComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule
{
}
