import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsComponent } from './gifs.component';

describe('GifsComponent', () => {
  let component: GifsComponent;
  let fixture: ComponentFixture<GifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
