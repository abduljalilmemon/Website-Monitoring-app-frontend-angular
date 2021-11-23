import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWebComponent } from './show-web.component';

describe('ShowWebComponent', () => {
  let component: ShowWebComponent;
  let fixture: ComponentFixture<ShowWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
