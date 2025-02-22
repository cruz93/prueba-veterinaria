import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'quotes',
        loadChildren: () => import('./quotes/quotes.module').then(m => m.QuotesModule)
    },
    {
        path: '',
        redirectTo: '/quotes',
        pathMatch: 'full'
    },

];
