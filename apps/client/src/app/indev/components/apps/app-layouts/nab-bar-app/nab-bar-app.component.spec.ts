import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabBarAppComponent } from './nab-bar-app.component';

describe('NabBarAppComponent', () => {
  let component: NabBarAppComponent;
  let fixture: ComponentFixture<NabBarAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NabBarAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NabBarAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
