import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismeComponent } from './tourisme.component';

describe('TourismeComponent', () => {
  let component: TourismeComponent;
  let fixture: ComponentFixture<TourismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourismeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
