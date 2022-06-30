import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progress1: number = 20;
  progress2: number = 20;

  get getProgress1() {
    return `${this.progress1}%`;
  }

  get getProgress2() {
    return `${this.progress2}%`;
  }

  // procesamos lo que el hijo mande como valor por el output
  // lo que retorna es el valor del progress, osea un number
  // changeProgress1(value: number) {
  //   console.log(value);
  // }

}
