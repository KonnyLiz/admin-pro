import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent {

  // le decimos que recibira valores desde afuera
  @Input() progress: number = 50;

  // le podemos pasar nombre a las propiedades de afuera
  // afuera se llamara a valor en lugar de progress
  // @Input('valor') name: number = 0;

  get getPorcentaje() {
    return `${this.progress}%`;
  }

  changeProgress(value: number) {
    this.progress += value;
    
    if (this.progress > 100) {
      this.progress = 100;
    }

    if (this.progress < 0) {
      this.progress = 0;
    }
  }

}
