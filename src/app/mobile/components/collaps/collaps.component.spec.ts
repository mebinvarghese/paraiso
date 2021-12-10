import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsComponent } from './collaps.component';

describe('CollapsComponent', () => {
  let component: CollapsComponent;
  let fixture: ComponentFixture<CollapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollapsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
