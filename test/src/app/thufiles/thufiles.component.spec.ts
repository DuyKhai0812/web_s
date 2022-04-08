import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThufilesComponent } from './thufiles.component';

describe('ThufilesComponent', () => {
  let component: ThufilesComponent;
  let fixture: ComponentFixture<ThufilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThufilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThufilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
