import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.scss']
})
export class CustomAlertComponent implements OnInit {

  @ViewChild('customAlertBoxModal', { static: true }) customAlertBoxModal: ModalDirective;

  constructor() { }

  ngOnInit() {
  }

}
