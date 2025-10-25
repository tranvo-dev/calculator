import { Component, inject } from '@angular/core';
import { CalculatorService } from '../../core/services/calculator-service';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator {
  result!: number;
  calculationService = inject(CalculatorService);

  ngOnInit() {
    this.result = 0;
  }

  add(arg0: number, arg1: number) {
    this.result = this.calculationService.add(arg0, arg1);
  }

  subtract(arg0: number, arg1: number) {
    this.result = this.calculationService.subtract(arg0, arg1);
  }

  multiply(arg0: number, arg1: number) {
    this.result = this.calculationService.multiply(arg0, arg1);
  }

  divide(arg0: number, arg1: number) {
    try {
      this.result = this.calculationService.divide(arg0, arg1);
    } catch (error) {
      this.result = Number.NaN;
      throw error;
    }
  }
}
