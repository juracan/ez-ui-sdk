import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ez-lead',
  templateUrl: './ez-lead.component.html',
  styleUrls: ['./ez-lead.component.css']
})
export class EzLeadComponent implements OnInit {

  @Output() public solidClick: EventEmitter<null> = new EventEmitter();
  @Output() public outlineClick: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSolidClick() {
    this.solidClick.emit();
  }

  onOutlineClick() {
    this.outlineClick.emit();
  }

}
