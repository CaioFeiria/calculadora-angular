import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-visor',
  imports: [FormsModule],
  templateUrl: './visor.component.html',
  styleUrl: './visor.component.scss',
})
export class VisorComponent {
  constructor() {}

  numA: number = 0;
  numB: number = 0;
  result?: number | string;

  Addition(): void {
    if (this.numA === 0 && this.numB === 0) {
      this.result = 'Digite dois números para realizar uma operação!';
    } else {
      this.result = this.numA + this.numB;
    }
  }

  Subtraction(): void {
    if (this.numA === 0 && this.numB === 0) {
      this.result = 'Digite dois números para realizar uma operação!';
    } else {
      this.result = this.numA - this.numB;
    }
  }

  Multiplication(): void {
    if (this.numA === 0 && this.numB === 0) {
      this.result = 'Digite dois números para realizar uma operação!';
    } else {
      this.result = this.numA * this.numB;
    }
  }

  Division(): void {
    if (this.numA === 0 && this.numB === 0) {
      this.result = 'Digite dois números para realizar uma operação!';
    } else {
      this.result = this.numA / this.numB;
    }
  }

  Clear(): void {
    this.result = '';
    this.numA = 0;
    this.numB = 0;
  }
}
