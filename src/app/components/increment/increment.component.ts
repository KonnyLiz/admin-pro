import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent {

  progress: number = 50;

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
