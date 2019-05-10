import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PaymentComponent } from './payment/payment.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/Sales' },
  { path: 'shoppingcart', component: ShoppingComponent    },
  { path: 'payment', component: PaymentComponent },
  { path: 'confirmation',  component: ConfirmationComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
