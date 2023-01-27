import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SciencebehindComponent } from './sciencebehind.component';

describe('SciencebehindComponent', () => {
  let component: SciencebehindComponent;
  let fixture: ComponentFixture<SciencebehindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SciencebehindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SciencebehindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
