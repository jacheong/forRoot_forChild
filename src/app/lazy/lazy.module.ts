import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './components/lazy/lazy.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { PollingModule } from '../polling/polling.module';



@NgModule({
  declarations: [LazyComponent],
  imports: [
    LazyRoutingModule,
    CommonModule,
    PollingModule.forChild({
      interval: 3000
    })
  ]
})
export class LazyModule { }
