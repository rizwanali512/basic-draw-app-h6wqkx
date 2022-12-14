import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shape-type',
  templateUrl: './shape-type.component.html',
  styleUrls: ['./shape-type.component.css']
})
export class ShapeTypeComponent {
  @Output() onTypeChange = new EventEmitter<string>();

  type = 'rectangle';

  typeChanged() {
    this.onTypeChange.emit(this.type);
  }
}