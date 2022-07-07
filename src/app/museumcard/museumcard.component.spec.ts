import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumcardComponent } from './museumcard.component';

describe('MuseumcardComponent', () => {
  let component: MuseumcardComponent;
  let fixture: ComponentFixture<MuseumcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuseumcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
