import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  arrayOfTickets = [];

  constructor(
    private _ticketService: TicketService
  ) { }

  ngOnInit() {
    this.getTickets();
  }

  getTickets() {
    this._ticketService.getTickets()
    .subscribe( res => {
      this.arrayOfTickets = res;
    });
  }

}
