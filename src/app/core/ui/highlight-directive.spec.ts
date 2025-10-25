import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight-directive';

/* If we test the use of the directive in specific component, in this case a Calculator component, next time if it is used in another component,
* we need to create another spec file for that component to test the directive there. This is not efficient.
* So we just test the directive itself here by creating a TestComponent that uses the directive.
* reference: https://angular.dev/guide/testing/attribute-directives#
*/
@Component({
  selector: 'app-test-component',
  imports: [HighlightDirective],
  template: `<p [appHighlight]='color'>Test Highlight Directive</p>`,
})
class TestComponent {
  color = 'yellow';
}


describe('HighlightDirective', () => {
  /* 
  * We will not implement this test since it check whether the directive is created
  * via invoking its constructor, which is not very useful in Angular context.
  */

  // it('should create an instance', () => {
  //   const directive = new HighlightDirective();
  //   expect(directive).toBeTruthy();
  // });

  /* 
  * “We’ll declare our directive directly in the configureTestingModule method, 
  * which guarantees its existence and the possibility of accessing it 
  * without passing through the constructor.”
  * Excerpt From
  * Mastering Angular Test-Driven Development
  * Ezéchiel Amen AGBLA
  * This material may be protected by copyright.
  */
  let fixture: ComponentFixture<TestComponent>;
  let testComponent: TestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightDirective, TestComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    testComponent = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should highlight the background with the specified color', () => {
    const element: HTMLElement = fixture.debugElement.query(By.css('p')).nativeElement;
    const expectedColor = 'green';
    testComponent.color = expectedColor;
    fixture.detectChanges();
    expect(element.style.backgroundColor).toBe(expectedColor);
  });

  it('should not highlight the background when no color is specified', () => {
    const element: HTMLElement = fixture.debugElement.query(By.css('p')).nativeElement;
    testComponent.color = '';
    fixture.detectChanges();
    expect(element.style.backgroundColor).toBe('');
  });

  // TODO: add more test regarding invalid color value, e.g., '12345', 'redblue', etc.
});
