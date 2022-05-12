import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ez-solid-button',
  templateUrl: './ez-solid-button.component.html',
  styleUrls: ['./ez-solid-button.component.css']
})
export class EzSolidButtonComponent implements OnInit {

  @Output() public click: EventEmitter<MouseEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(event: MouseEvent | undefined) {
    this.click.emit(event);
  }

}
