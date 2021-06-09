import { Component, OnInit } from '@angular/core';
import { PollingService } from 'src/app/polling/services/polling.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {
  polling$: Observable<any>;

  constructor(
    private ps: PollingService
  ) { }

  ngOnInit(): void {
    this.polling$ = this.ps.polling$;
  }

}
