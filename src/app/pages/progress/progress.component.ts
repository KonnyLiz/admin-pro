import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

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
