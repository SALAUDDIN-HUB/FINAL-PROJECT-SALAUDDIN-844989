import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachItemsComponent } from './serach-items.component';

describe('SerachItemsComponent', () => {
  let component: SerachItemsComponent;
  let fixture: ComponentFixture<SerachItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
