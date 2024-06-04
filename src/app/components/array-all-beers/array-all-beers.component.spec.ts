import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayAllBeersComponent } from './array-all-beers.component';

describe('ArrayAllBeersComponent', () => {
  let component: ArrayAllBeersComponent;
  let fixture: ComponentFixture<ArrayAllBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayAllBeersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrayAllBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
