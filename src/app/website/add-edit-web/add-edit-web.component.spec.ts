import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditWebComponent } from './add-edit-web.component';

describe('AddEditWebComponent', () => {
  let component: AddEditWebComponent;
  let fixture: ComponentFixture<AddEditWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
