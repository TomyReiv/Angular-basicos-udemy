import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        HeroeComponent,
        ListadoComponent
    ],
    imports:[
        CommonModule /* Nos permite usar los ng if, for, etc.  */
    ]
})

export class HeroesModule{}


/* Las declaraciones son un arreglo q dicen q cosas tiene este modulo
   En los exports: Que cosas queres q sean visibles fuera de tu modulo */
   /* Imports: Van modulos */