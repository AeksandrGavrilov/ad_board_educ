import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockAdComponent } from './block-ad.component';

describe('BlockAdComponent', () => {
  let component: BlockAdComponent;
  let fixture: ComponentFixture<BlockAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockAdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
