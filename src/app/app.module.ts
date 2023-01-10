import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { CommonModule } from '@angular/common';
import { ContadorModule } from './contador/Contador.Module';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/* <!-- Modulos encapsula los componentes y ayuda con laizyload(carga peresosa). --> */
