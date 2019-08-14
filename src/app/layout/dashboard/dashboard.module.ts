import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';
import { RoseComponent } from './rose/rose.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        DashboardRoutingModule,
        StatModule,
        HttpModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgxStripeModule.forRoot('pk_test_lJqo2ImUTmU0oIz3NjK8dPFR00V56Xrxi6')
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        RoseComponent,
        PaymentComponent,
        PaymentsuccessComponent
    ],
   
 

})
export class DashboardModule {}
