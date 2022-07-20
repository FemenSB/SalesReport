import { Component, OnInit } from '@angular/core';
import { BrandMessage } from '../brand-message';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {

  constructor() { }

  messageData : BrandMessage;

  setMessage(message : BrandMessage) {
    this.messageData = message;
  }

  ngOnInit() {
  }

}
