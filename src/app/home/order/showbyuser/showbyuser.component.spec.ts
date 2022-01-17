import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbyuserComponent } from './showbyuser.component';

describe('ShowbyuserComponent', () => {
  let component: ShowbyuserComponent;
  let fixture: ComponentFixture<ShowbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowbyuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
