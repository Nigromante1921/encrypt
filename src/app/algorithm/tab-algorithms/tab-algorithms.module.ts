import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import {TabAlgorithmsComponent } from './tab-algorithms.component';
import {EscitalaComponent } from './escitala/escitala/escitala.component';
import { RouterModule } from '@angular/router';
import { PolibiosComponent } from './polibios/polibios/polibios.component';
import { CesarComponent } from './cesar/cesar/cesar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  imports: [
    MatTabsModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild([
    {
      path: '', component: TabAlgorithmsComponent, children: [
        { path: 'escitala', component: EscitalaComponent },
        { path: 'polibios', component: PolibiosComponent },
        { path: 'cesar', component: CesarComponent },
      ]
    }
  ])
  ],
  declarations: [
    TabAlgorithmsComponent,
    EscitalaComponent,
    PolibiosComponent,
    CesarComponent
  ],
  
})
export class TabAlgorithmsModule { }
