import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollingComponent } from './components/polling/polling.component';
import { PollingService, PollingConfig, INTERVAL } from './services/polling.service';



@NgModule({
  declarations: [PollingComponent],
  imports: [
    CommonModule
  ],
  exports: [PollingComponent]
})
export class PollingModule {
  static forRoot(): ModuleWithProviders<PollingModule> {
    return {
      ngModule: PollingModule,
      providers: [
        PollingService
      ]
    };
  }

  static forChild(config: PollingConfig): ModuleWithProviders<PollingModule> {
    return {
      ngModule: PollingModule,
      providers: [
        PollingService,
        { provide: INTERVAL, useValue: config.interval || 2000 }
      ]
    }
  }
}
