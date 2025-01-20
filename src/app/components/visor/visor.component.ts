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
  result?: number | null;

  Addition(): number {
    return (this.result = this.numA + this.numB);
  }

  Subtraction(): number {
    return (this.result = this.numA - this.numB);
  }

  Multiplication(): number {
    return (this.result = this.numA * this.numB);
  }

  Division(): number {
    return (this.result = this.numA / this.numB);
  }

  Clear(): void {
    this.result = null;
  }
}
