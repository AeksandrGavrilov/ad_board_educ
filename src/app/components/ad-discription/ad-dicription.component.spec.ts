import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDicriptionComponent } from './ad-discription.component';

describe('AdDicriptionComponent', () => {
  let component: AdDicriptionComponent;
  let fixture: ComponentFixture<AdDicriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdDicriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdDicriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
