import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssinaturaService } from './service/assinatura-service';
import { BitcoinAverageService } from './service/bitcoinAverage-service';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routers/app-routes';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    HttpClientModule,
    ChartsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AssinaturaService,
    BitcoinAverageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
