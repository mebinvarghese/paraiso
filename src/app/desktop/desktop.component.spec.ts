import { TestBed, async } from '@angular/core/testing';
import { DesktopComponent } from './desktop.component';

describe('DesktopComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DesktopComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DesktopComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'paraiso'`, () => {
    const fixture = TestBed.createComponent(DesktopComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('paraiso');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DesktopComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('paraiso app is running!');
  });
});
