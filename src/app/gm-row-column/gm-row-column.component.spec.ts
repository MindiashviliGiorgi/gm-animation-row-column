import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmRowColumnComponent } from './gm-row-column.component';

describe('GmRowColumnComponent', () => {
  let component: GmRowColumnComponent;
  let fixture: ComponentFixture<GmRowColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GmRowColumnComponent]
    });
    fixture = TestBed.createComponent(GmRowColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
