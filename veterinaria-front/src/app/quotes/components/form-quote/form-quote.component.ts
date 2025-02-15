import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuotesServiceService } from '../../../services/quotes.service.service';
import { Quote } from '../../../interfaces/quotes.interface';
import { AlertComponent } from "../alert/alert.component";

@Component({
  selector: 'app-form-quote',
  imports: [ReactiveFormsModule, AlertComponent],
  templateUrl: './form-quote.component.html',
})
export class FormQuoteComponent {

  public formInformation: FormGroup;
  public alert = {
    type: '',
    message: ''
  }

  constructor(private form: FormBuilder, private quoteService: QuotesServiceService) {

    this.formInformation = this.form.group({
      clientName: ['', Validators.required],
      petName: ['', Validators.required],
      reason: ['', Validators.required],
      dateTime: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formInformation.valid) {

      let dateTimeValue = this.formInformation.value.dateTime;
      dateTimeValue = dateTimeValue.replace("T", " ") + ":00";

      const payload: Quote = {
        clientName: this.formInformation.value.clientName,
        petName: this.formInformation.value.petName,
        reason: this.formInformation.value.reason,
        date: dateTimeValue
      };

      this.quoteService.saveQuote(payload).subscribe(
        {
          next: (quote) => this.alert = { type: 'success', message: 'Cita creada correctamente' },
          error: (err) => this.alert = {
            type: 'error', message: 'Error al crear la cita: ' + err.error.message
          }
        }
      )
      this.formInformation.reset();
    }
  }

}
