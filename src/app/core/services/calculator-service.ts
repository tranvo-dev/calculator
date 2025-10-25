import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  add(arg0: number, arg1: number) {
    return arg0 + arg1;
  }
  subtract(arg0: number, arg1: number) {
    return arg0 - arg1;
  }
  multiply(arg0: number, arg1: number) {
    return arg0 * arg1;
  }
  divide(arg0: number, arg1: number) {
    if(arg1 === 0) {
      throw new Error('Cannot divide by zero');
    }
    return arg0 / arg1;
  }
  
}
