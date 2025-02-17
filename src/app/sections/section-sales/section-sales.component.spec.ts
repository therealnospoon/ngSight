import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSalesComponent } from './section-sales.component';

describe('SectionSalesComponent', () => {
  let component: SectionSalesComponent;
  let fixture: ComponentFixture<SectionSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionSalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
