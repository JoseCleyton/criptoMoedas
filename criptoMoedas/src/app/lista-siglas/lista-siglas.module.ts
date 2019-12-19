import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaSiglasComponent } from './lista-siglas.component';
import { RouterModule } from '@angular/router';
import { SIGLAS_ROUTES } from './lista-siglas-routes';
import { BitcoinAverageService } from '../service/bitcoinAverage-service';
import { ChartsModule } from 'ng2-charts';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    ListaSiglasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SIGLAS_ROUTES),
    MatProgressBarModule,
    ChartsModule,
  ],
  providers:[
    BitcoinAverageService
  ]
})
export class ListaSiglasModule { }
