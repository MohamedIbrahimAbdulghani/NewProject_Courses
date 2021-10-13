import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideossComponent } from './videoss.component';

describe('VideossComponent', () => {
  let component: VideossComponent;
  let fixture: ComponentFixture<VideossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
