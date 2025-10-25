import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorService } from '../../core/services/calculator-service';
import { Calculator } from './calculator';

describe('Calculator', () => {
  let component: Calculator;
  let fixture: ComponentFixture<Calculator>;
  let calculationService: CalculatorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculator],
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
});
