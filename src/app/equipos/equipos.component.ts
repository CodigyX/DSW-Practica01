import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common'; // Importa ViewportScroller

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent {
  constructor(private viewportScroller: ViewportScroller) { }

  // Función para hacer scroll hacia una sección
  scrollToSection(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }

  equipos = [
    { nombre: 'América', logo: 'assets/logos/america.png' },
    { nombre: 'Atlas', logo: 'assets/logos/atlas.png' },
    { nombre: 'Atlético San Luis', logo: 'assets/logos/asl.png' },
    { nombre: 'Cruz Azul', logo: 'assets/logos/cruzazul.png' },
    { nombre: 'FC Juárez', logo: 'assets/logos/juarez.png' },
    { nombre: 'Guadalajara', logo: 'assets/logos/chivas.png' },
    { nombre: 'León', logo: 'assets/logos/leon.png' },
    { nombre: 'Mazatlán', logo: 'assets/logos/mazatlan.png' },
    { nombre: 'Monterrey', logo: 'assets/logos/mty.png' },
    { nombre: 'Necaxa', logo: 'assets/logos/necaxa.png' },
    { nombre: 'Pachuca', logo: 'assets/logos/pachuca.png' },
    { nombre: 'Puebla', logo: 'assets/logos/puebla.png' },
    { nombre: 'Pumas UNAM', logo: 'assets/logos/pumas.png' },
    { nombre: 'Querétaro', logo: 'assets/logos/queretaro.png' },
    { nombre: 'Santos Laguna', logo: 'assets/logos/santos.png' },
    { nombre: 'Tigres UANL', logo: 'assets/logos/tigres.png' },
    { nombre: 'Tijuana', logo: 'assets/logos/tijuana.png' },
    { nombre: 'Toluca', logo: 'assets/logos/toluca.png' }
  ];

  tablaPorcentual = [
    { posicion: 1, nombre: 'América', puntos: 33, partidos: 15, porcentaje: '73%' },
    { posicion: 2, nombre: 'Tigres UANL', puntos: 32, partidos: 15, porcentaje: '71%' },
    { posicion: 3, nombre: 'Monterrey', puntos: 31, partidos: 15, porcentaje: '69%' },
    { posicion: 4, nombre: 'Guadalajara', puntos: 30, partidos: 15, porcentaje: '67%' },
    { posicion: 5, nombre: 'Santos Laguna', puntos: 29, partidos: 15, porcentaje: '65%' },
    { posicion: 6, nombre: 'Atlas', puntos: 28, partidos: 15, porcentaje: '62%' },
    { posicion: 7, nombre: 'Toluca', puntos: 28, partidos: 15, porcentaje: '62%' },
    { posicion: 8, nombre: 'Pachuca', puntos: 27, partidos: 15, porcentaje: '61%' },
    { posicion: 9, nombre: 'Atlético San Luis', puntos: 26, partidos: 15, porcentaje: '59%' },
    { posicion: 10, nombre: 'Cruz Azul', puntos: 25, partidos: 15, porcentaje: '58%' },
    { posicion: 11, nombre: 'Puebla', puntos: 24, partidos: 15, porcentaje: '53%' },
    { posicion: 12, nombre: 'Pumas UNAM', puntos: 23, partidos: 15, porcentaje: '51%' },
    { posicion: 13, nombre: 'FC Juárez', puntos: 22, partidos: 15, porcentaje: '52%' },
    { posicion: 14, nombre: 'Tijuana', puntos: 20, partidos: 15, porcentaje: '45%' },
    { posicion: 15, nombre: 'Querétaro', puntos: 19, partidos: 15, porcentaje: '44%' },
    { posicion: 16, nombre: 'León', puntos: 18, partidos: 15, porcentaje: '40%' },
    { posicion: 17, nombre: 'Necaxa', puntos: 17, partidos: 15, porcentaje: '38%' },
    { posicion: 18, nombre: 'Mazatlán', puntos: 15, partidos: 15, porcentaje: '34%' }
  ];

  tablaTitulos = [
    { nombre: 'América', titulos: 14 },
    { nombre: 'Guadalajara', titulos: 12 },
    { nombre: 'Toluca', titulos: 10 },
    { nombre: 'Cruz Azul', titulos: 9 },
    { nombre: 'León', titulos: 8 },
    { nombre: 'Tigres UANL', titulos: 7 },
    { nombre: 'Pumas UNAM', titulos: 7 },
    { nombre: 'Pachuca', titulos: 7 },
    { nombre: 'Santos Laguna', titulos: 6 },
    { nombre: 'Monterrey', titulos: 5 },
    { nombre: 'Atlas', titulos: 3 },
    { nombre: 'Necaxa', titulos: 3 },
    { nombre: 'Tijuana', titulos: 1 }
  ];
}
