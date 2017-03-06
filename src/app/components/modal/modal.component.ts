import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }

  @Input() show: boolean;
  @Output() showChange = new EventEmitter<boolean>();

  ngOnInit() {
    console.log('show', this.show);
  }

  hide(){
    this.show = false;
    this.showChange.emit(this.show);
  }

}
