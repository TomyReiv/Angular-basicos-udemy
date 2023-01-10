import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

        <h3>La base es {{base}}</h3>

        <h1>{{titulo}}</h1>
        <!-- los eventos en angular se ponen () -->
        <button (click)="acumular(base)">+ {{base}}</button>
        
        <span> {{numero}} </span>
        
        <button (click)=" acumular(-base) ">- {{base}}</button>
    `
})

export class contadorComponent {
    public titulo = 'Contador App';
    public numero: number = 10;

    public base: number = 3;

    acumular(valor: number) {
        this.numero += valor;
    }
}