/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AmarelinhoComponent } from './amarelinho.component';

describe('AmarelinhoComponent', () => {
  let component: AmarelinhoComponent;
  let fixture: ComponentFixture<AmarelinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmarelinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmarelinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
