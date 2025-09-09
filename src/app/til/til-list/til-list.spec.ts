import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilListComponent  } from './til-list';

describe('TilList', () => {
  let component: TilListComponent ;
  let fixture: ComponentFixture<TilListComponent >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TilListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TilListComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
