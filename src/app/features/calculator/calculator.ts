import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator {
  result!: number;

  ngOnInit() {
    this.result = 0;
  }

  add(arg0: number, arg1: number) {
    this.result = arg0 + arg1;
  }

  subtract(arg0: number, arg1: number) {
    this.result = arg0 - arg1;
  }

  multiply(arg0: number, arg1: number) {
    this.result = arg0 * arg1;
  }

  divide(arg0: number, arg1: number) {
    if(arg1 === 0) {
      this.result = 0;
      throw new Error('Cannot divide by zero');
    }
    this.result = arg0 / arg1;
  }
}
