import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumdetailsComponent } from './museumdetails.component';

describe('MuseumdetailsComponent', () => {
  let component: MuseumdetailsComponent;
  let fixture: ComponentFixture<MuseumdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuseumdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
