import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PollingService } from '../polling/services/polling.service';

@Component({
  selector: 'app-eager',
  templateUrl: './eager.component.html',
  styleUrls: ['./eager.component.scss']
})
export class EagerComponent implements OnInit {
  polling$: Observable<any>;
  constructor(
    private ps: PollingService
  ) { }

  ngOnInit(): void {
    this.polling$ = this.ps.polling$;
  }

}
