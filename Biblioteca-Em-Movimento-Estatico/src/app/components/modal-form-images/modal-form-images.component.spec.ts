/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModalFormImagesComponent } from './modal-form-images.component';

describe('ModalFormImagesComponent', () => {
  let component: ModalFormImagesComponent;
  let fixture: ComponentFixture<ModalFormImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFormImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFormImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
