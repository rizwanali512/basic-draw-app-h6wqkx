import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Shape } from '../shape';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent implements OnInit {
  constructor() {}
  @Input() shapesToDraw: Shape[] = [];
  shapeType = 'rectangle';
  setType(type: string) {
    this.shapeType = type;
  }
  public x: any = 30;
  public y: any = 30;
  @Input() currentShape: Subject<Shape>;

  ngOnInit() {}

  // the shape being just drawn
  createdShape: Shape;

  startDrawing(evt: MouseEvent) {
    this.createdShape = {
      type: this.shapeType,
      x: evt.offsetX,
      y: evt.offsetY,
      w: 0,
      h: 0,
      text: 'Rizwan',
    };
    this.x = evt.offsetX;
    this.y = evt.offsetY;

    this.shapesToDraw.push(this.createdShape);
  }

  keepDrawing(evt: MouseEvent) {
    if (this.createdShape) {
      this.currentShape.next(this.createdShape);
      this.createdShape.w = evt.offsetX - this.createdShape.x;
      this.createdShape.h = evt.offsetY - this.createdShape.y;
    }
  }

  stopDrawing() {
    this.createdShape = null;
  }
}
