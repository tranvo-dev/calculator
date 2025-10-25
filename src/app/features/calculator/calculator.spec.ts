import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculator } from './calculator';

describe('Calculator', () => {
  let component: Calculator;
  let fixture: ComponentFixture<Calculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display result as 0 initially', () => {
    component.ngOnInit();
    expect(component.result).toEqual(0);
  });

  it('should add 2 numbers and set to component result correctly', () => {
    component.add(2, 3);
    expect(component.result).toEqual(5);
  });

  it('should substract 2 numbers and set to component result correctly', () => {
    component.subtract(5, 3);
    expect(component.result).toEqual(2);
  });

  it('should multiply 2 numbers and set to component result correctly', () => {
    component.multiply(2, 3);
    expect(component.result).toEqual(6);
  });

  it('should divide 2 non-zero numbers and set to component result correctly', () => {
    component.divide(6, 2);
    expect(component.result).toEqual(3);
  });

  it('should throw error when dividing by 0 and result is reset to 0', () => {
    expect(() => component.divide(6, 0)).toThrow('Cannot divide by zero');
    expect(component.result).toEqual(0);
  });
});
