import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyNeoRxComponent } from './why-neo-rx.component';

describe('WhyNeoRxComponent', () => {
  let component: WhyNeoRxComponent;
  let fixture: ComponentFixture<WhyNeoRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyNeoRxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyNeoRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
