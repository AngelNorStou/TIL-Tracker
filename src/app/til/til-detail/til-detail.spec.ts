import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilDetail } from './til-detail';

describe('TilDetail', () => {
  let component: TilDetail;
  let fixture: ComponentFixture<TilDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TilDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TilDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
