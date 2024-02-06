import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabAlgorithmsComponent } from './algorithm/tab-algorithms/tab-algorithms.component';

const routes: Routes = [
  {
    path : '',
    pathMatch: 'full',
    redirectTo: 'tabs', 
    
  },
  {
    path : 'tabs' ,
    loadChildren : () => import('./algorithm/tab-algorithms/tab-algorithms.module').then((m)=>m.TabAlgorithmsModule),
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
