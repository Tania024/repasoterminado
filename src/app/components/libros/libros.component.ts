import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { Libro } from '../../../domain/libros';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.scss'
})
export class LibrosComponent implements OnInit{
  libros: Libro[] = [];
  title: string = '';
  author: string = '';
  description: string = '';

  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.libros = this.librosService.getLibro();

  }

  addLibro(): void {
    const newLibro: Libro = {
      title: this.title,
      author: this.author,
      description: this.description
    };
    this.librosService.addLibro(newLibro);
    this.title = '';
    this.author = '';
    this.description = '';
    this.libros = this.librosService.getLibro();

    console.log("Ya valio ")
  }

  deleteLibro(id: number): void {
    this.librosService.deleteLibro(id);
    this.libros = this.librosService.getLibro();
  }
}
