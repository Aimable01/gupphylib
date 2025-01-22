import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifComponent } from './gif.component';

describe('GifComponent', () => {
  let component: GifComponent;
  let fixture: ComponentFixture<GifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
