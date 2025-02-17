import { Component } from '@angular/core';
import { ListQuotesComponent } from "../../components/list-quotes/list-quotes.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuotesServiceService } from '../../../services/quotes.service.service';

@Component({
  selector: 'app-quotes-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './quotes-page.component.html',
})
export class QuotesPageComponent {

}
