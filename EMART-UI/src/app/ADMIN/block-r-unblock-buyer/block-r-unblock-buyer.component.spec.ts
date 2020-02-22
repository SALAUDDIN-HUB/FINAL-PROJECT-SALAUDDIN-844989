import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockRUnblockBuyerComponent } from './block-r-unblock-buyer.component';

describe('BlockRUnblockBuyerComponent', () => {
  let component: BlockRUnblockBuyerComponent;
  let fixture: ComponentFixture<BlockRUnblockBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockRUnblockBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockRUnblockBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
