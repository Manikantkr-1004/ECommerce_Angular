import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DisaplyPrdComponent } from './disaply-prd/disaply-prd.component';

const routes: Routes = [{ path: '', redirectTo: '', pathMatch: 'full' }, // Redirect to the default route
  { path: '', component: DisaplyPrdComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
