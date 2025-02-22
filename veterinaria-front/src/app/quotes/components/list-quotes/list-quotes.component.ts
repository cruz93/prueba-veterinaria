import { Component, EventEmitter, Output } from '@angular/core';
import { Quote } from '../../../interfaces/quotes.interface';
import { QuotesServiceService } from '../../../services/quotes.service.service';
import { CommonModule } from '@angular/common';
import { AlertComponent } from "../alert/alert.component";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-quotes',
  standalone: true,
  imports: [CommonModule, AlertComponent],
  templateUrl: './list-quotes.component.html',
})
export class ListQuotesComponent {

  public listQuotes: Quote[] = [];
  public alert = {
    type: '',
    message: ''
  }

  constructor(private quoteService: QuotesServiceService) { }

  ngOnInit() {
    this.getQuotes()
  }

  getQuotes(): void {
    this.quoteService.getQuotes().subscribe(({
      next: (quotes) => this.listQuotes = quotes,
      error: (err) => this.alert = { type: 'error', message: 'Error al obtener las citas: ' + err.error.message }
    }));
  }

  onDeleteQuote(id?: number): void {
    if (id) {
      this.quoteService.deleteQuote(id).subscribe({
        next: () => {
          this.getQuotes()
        },
        error: (err) => this.alert = { type: 'error', message: 'Error al eliminar cita' }

      })
    }
  }

  confirmDelete(index?: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.onDeleteQuote(index);
        Swal.fire('Eliminado', 'La cita ha sido eliminada.', 'success');
      }
    });
  }
}
