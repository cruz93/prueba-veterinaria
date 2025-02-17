import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesPageComponent } from './pages/quotes-page/quotes-page.component';
import { ListQuotesComponent } from './components/list-quotes/list-quotes.component';
import { RouterModule } from '@angular/router';
import { FormQuoteComponent } from './components/form-quote/form-quote.component';
import { MainComponent } from './components/main/main.component';

export const routes = [
  {
    path: '',
    component: QuotesPageComponent,
    children: [
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'list',
        component: ListQuotesComponent
      },
      {
        path: 'new',
        component: FormQuoteComponent
      },
      {
        path: '**',
        redirectTo: 'main'
      }
    ]

  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ],
  exports: [
    RouterModule
  ]
})
export class QuotesRoutingModule { }
