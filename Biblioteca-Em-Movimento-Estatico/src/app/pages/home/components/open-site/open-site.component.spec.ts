/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OpenSiteComponent } from './open-site.component';

describe('OpenSiteComponent', () => {
  let component: OpenSiteComponent;
  let fixture: ComponentFixture<OpenSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
