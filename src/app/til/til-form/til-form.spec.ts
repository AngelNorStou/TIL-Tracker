import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilFormComponent } from './til-form';


describe('TilForm', () => {
  let component: TilFormComponent;
  let fixture: ComponentFixture<TilFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TilFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TilFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
