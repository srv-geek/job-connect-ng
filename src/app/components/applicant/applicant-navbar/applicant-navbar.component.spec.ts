import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantNavbarComponent } from './applicant-navbar.component';

describe('ApplicantNavbarComponent', () => {
  let component: ApplicantNavbarComponent;
  let fixture: ComponentFixture<ApplicantNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicantNavbarComponent]
    });
    fixture = TestBed.createComponent(ApplicantNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
