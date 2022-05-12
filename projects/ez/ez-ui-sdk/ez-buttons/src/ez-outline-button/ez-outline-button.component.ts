import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ez-outline-button',
  templateUrl: './ez-outline-button.component.html',
  styleUrls: ['./ez-outline-button.component.css']
})
export class EzOutlineButtonComponent implements OnInit {

  @Output() public click: EventEmitter<MouseEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(event: MouseEvent | undefined) {
    this.click.emit(event);
  }

}
