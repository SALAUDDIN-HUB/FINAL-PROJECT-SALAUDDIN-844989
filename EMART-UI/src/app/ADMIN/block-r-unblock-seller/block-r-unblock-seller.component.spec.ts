import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockRUnblockSellerComponent } from './block-r-unblock-seller.component';

describe('BlockRUnblockSellerComponent', () => {
  let component: BlockRUnblockSellerComponent;
  let fixture: ComponentFixture<BlockRUnblockSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockRUnblockSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockRUnblockSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
