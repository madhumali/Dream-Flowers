import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { RoseComponent } from './rose/rose.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';

const routes: Routes = [
    {
        path: '', component: DashboardComponent
    },
    {
        path: 'rose', component: RoseComponent
    },
    {
        path: 'rose/payment', component: PaymentComponent
    },
    {
        path: 'rose/payment/paymentsuccess', component: PaymentsuccessComponent
    },
    {
        path:'add-to-cart/:id', component: RoseComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
