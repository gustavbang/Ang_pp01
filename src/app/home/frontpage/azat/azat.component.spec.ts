import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzatComponent } from './azat.component';

describe('AzatComponent', () => {
  let component: AzatComponent;
  let fixture: ComponentFixture<AzatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
