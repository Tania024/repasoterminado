import { Injectable } from '@angular/core';
import { Libro } from '../../domain/libros';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private libros: Libro[] = [];
  private idCounter = 1;

  constructor() { }

  getLibro(): Libro[] {
    return this.libros;
  }

  addLibro(libro: Libro): void {
    libro.id = this.idCounter++;
    this.libros.push(libro);
  }

  deleteLibro(id: number): void {
    this.libros = this.libros.filter(libro => libro.id !== id);
  }
}
