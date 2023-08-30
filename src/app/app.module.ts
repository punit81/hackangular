import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { JsonTableComponent } from './json-table/json-table.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    BarChartComponent,
    JsonTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
