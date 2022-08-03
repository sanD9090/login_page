import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogrefComponent } from './dialogref.component';

describe('DialogrefComponent', () => {
  let component: DialogrefComponent;
  let fixture: ComponentFixture<DialogrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogrefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
