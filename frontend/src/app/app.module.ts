// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Importe o HttpClientModule

import { AppComponent } from './app.component';  // Importe o componente principal

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule   // Adicione HttpClientModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
