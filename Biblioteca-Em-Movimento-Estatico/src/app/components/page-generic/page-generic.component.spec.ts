/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageGenericComponent } from './page-generic.component';

describe('PageGenericComponent', () => {
  let component: PageGenericComponent;
  let fixture: ComponentFixture<PageGenericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGenericComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
