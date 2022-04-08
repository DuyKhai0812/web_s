import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThufileComponent } from './thufile.component';

describe('ThufileComponent', () => {
  let component: ThufileComponent;
  let fixture: ComponentFixture<ThufileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThufileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThufileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
