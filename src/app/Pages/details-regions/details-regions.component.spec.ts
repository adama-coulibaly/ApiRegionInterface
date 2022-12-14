import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRegionsComponent } from './details-regions.component';

describe('DetailsRegionsComponent', () => {
  let component: DetailsRegionsComponent;
  let fixture: ComponentFixture<DetailsRegionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRegionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
