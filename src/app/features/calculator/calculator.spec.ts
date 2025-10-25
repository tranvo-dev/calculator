import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorService } from '../../core/services/calculator-service';
import { Calculator } from './calculator';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from '../../core/ui/highlight-directive';

describe('Calculator', () => {
  let component: Calculator;
  let fixture: ComponentFixture<Calculator>;
  let calculationService: CalculatorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculator, HighlightDirective],
      providers: [CalculatorService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calculator);
    component = fixture.componentInstance;
    calculationService = TestBed.inject(CalculatorService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display result as 0 initially', () => {
    component.ngOnInit();
    expect(component.result).toEqual(0);
  });

  it('should call calculation service add 2 numbers and set to component result correctly', () => {
    const calculationServiceSpy = jest.spyOn(calculationService, 'add');
    component.add(2, 3);
    expect(calculationServiceSpy).toHaveBeenCalledWith(2, 3);
    expect(component.result).toEqual(5);
  });

  it('should substract 2 numbers and set to component result correctly', () => {
    const calculationServiceSpy = jest.spyOn(calculationService, 'subtract');
    component.subtract(5, 3);
    expect(calculationServiceSpy).toHaveBeenCalledWith(5, 3);
    expect(component.result).toEqual(2);
  });

  it('should multiply 2 numbers and set to component result correctly', () => {
    const calculationServiceSpy = jest.spyOn(calculationService, 'multiply');
    component.multiply(2, 3);
    expect(calculationServiceSpy).toHaveBeenCalledWith(2, 3);
    expect(component.result).toEqual(6);
  });

  it('should divide 2 non-zero numbers and set to component result correctly', () => {
    const calculationServiceSpy = jest.spyOn(calculationService, 'divide');
    component.divide(6, 2);
    expect(calculationServiceSpy).toHaveBeenCalledWith(6, 2);
    expect(component.result).toEqual(3);
  });

  it('should throw error when dividing by 0 and result is reset to NaN value', () => {
    const calculationServiceSpy = jest.spyOn(calculationService, 'divide');
    expect(() => component.divide(6, 0)).toThrow('Cannot divide by zero');
    expect(calculationServiceSpy).toHaveBeenCalledWith(6, 0);
    expect(component.result).toEqual(Number.NaN);
  });

  it('should highlight the result in red backgound when division by zero occurs', () => {
    try {
      component.divide(6, 0);
    } catch(error) {
      fixture.detectChanges();
      expect(component.errorHighlight).toBe('red');
      const resultElement: HTMLElement = fixture.debugElement.query(By.css('.result')).nativeElement;
      expect(resultElement.style.backgroundColor).toBe('red');
    }
  });

  it('should not highlight the result when performing add operation of 2 valid numbers after dividing by zero error', () => {
    // cause division by zero error
    try {
      component.divide(6, 0);
    } catch(error) {
      fixture.detectChanges();
    }
    // add two numbers now
    component.add(2, 3);
    fixture.detectChanges();
    expect(component.errorHighlight).toBe('');
    const resultElement: HTMLElement = fixture.debugElement.query(By.css('.result')).nativeElement;
    expect(resultElement.style.backgroundColor).toBe('');
  });

  it('should not highlight the result when performing subtract operation of 2 valid numbers after dividing by zero erro', () => {
    // cause division by zero error
    try {
      component.divide(6, 0);
    } catch(error) {
      fixture.detectChanges();
    }

    // subtract two numbers now
    component.subtract(5, 3);
    fixture.detectChanges();
    expect(component.errorHighlight).toBe('');
    const resultElementAfterSubtract: HTMLElement = fixture.debugElement.query(By.css('.result')).nativeElement;
    expect(resultElementAfterSubtract.style.backgroundColor).toBe('');
  });

  it('should not highlight the result when performing multiply operation of 2 valid numbers after dividing by zero error', () => {
    // cause division by zero error
    try {
      component.divide(6, 0);
    } catch(error) {
      fixture.detectChanges();
    }

    // multiply two numbers now
    component.multiply(2, 3);
    fixture.detectChanges();
    expect(component.errorHighlight).toBe('');
    const resultElementAfterMultiply: HTMLElement = fixture.debugElement.query(By.css('.result')).nativeElement;
    expect(resultElementAfterMultiply.style.backgroundColor).toBe('');
  });

  it('should not highlight the result when performing divide operation of 2 valid numbers after dividing by zero error', () => {
    // cause division by zero error
    try {
      component.divide(6, 0);
    } catch(error) {
      fixture.detectChanges();
    }

    // divide two valid numbers now
    component.divide(6, 2);
    fixture.detectChanges();
    expect(component.errorHighlight).toBe('');
    const resultElementAfterDivide: HTMLElement = fixture.debugElement.query(By.css('.result')).nativeElement;
    expect(resultElementAfterDivide.style.backgroundColor).toBe('');
  });
});