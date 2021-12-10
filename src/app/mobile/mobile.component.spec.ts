import { TestBed, async } from '@angular/core/testing';
import { MobileComponent } from './mobile.component';

describe('MobileComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MobileComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MobileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'paraiso'`, () => {
    const fixture = TestBed.createComponent(MobileComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('paraiso');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MobileComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('paraiso app is running!');
  });
});
