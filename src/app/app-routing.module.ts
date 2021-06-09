import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EagerComponent } from './eager/eager.component';

const routes: Routes = [
  { path: '', redirectTo: '/eager', pathMatch: 'full' },
  { path: 'eager', component: EagerComponent },
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
