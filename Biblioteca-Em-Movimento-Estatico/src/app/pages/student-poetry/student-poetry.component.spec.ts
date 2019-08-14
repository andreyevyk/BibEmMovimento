/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudentPoetryComponent } from './student-poetry.component';

describe('StudentPoetryComponent', () => {
  let component: StudentPoetryComponent;
  let fixture: ComponentFixture<StudentPoetryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPoetryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPoetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
