import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.scss']
})
export class CustomAlertComponent implements OnInit {

  @ViewChild('customAlertBoxModal', { static: true }) customAlertBoxModal: ModalDirective;
  @Output() modelEvent = new EventEmitter;
  @Input() data: any;
  @Input() message: any;

  constructor() { }

  ngOnInit() {
  }

  onNoClick() {
    this.modelEvent.emit({ buttonValue: false });
  }

  onYesClick() {
    console.log('data:', this.data)
    this.modelEvent.emit({ buttonValue: true, data: this.data });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.customAlertBoxModal.show();
  }

}
