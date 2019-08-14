/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SaveContentComponent } from './save-content.component';

describe('SaveContentComponent', () => {
  let component: SaveContentComponent;
  let fixture: ComponentFixture<SaveContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
