import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampshowComponent } from './campshow.component';

describe('CampshowComponent', () => {
  let component: CampshowComponent;
  let fixture: ComponentFixture<CampshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
