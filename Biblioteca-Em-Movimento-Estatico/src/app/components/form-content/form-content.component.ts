import { Component, OnInit, Input, Output, forwardRef } from '@angular/core';
import { FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormContentComponent),
      multi: true,
    }
  ]
})
export class FormContentComponent implements ControlValueAccessor {

  saveForm: FormGroup;

  @Input()
  pageName: string;

  @Input()
  idEdition: string;

  @Output()
  save = new EventEmitter();

  constructor() { }

  hasErros(formName: string) {
    const control = this.saveForm.controls[formName];

    if (control.errors && (control.dirty || control.touched)) {
      return true;
    }
    return false;
  }

  setPageName(pageName: string) {
    this.pageName = pageName;
    this.refrashForm();
  }

  refrashForm() {
    this.refrashControl('title', ['poetry', 'project', 'gallery']);
    this.refrashControl('content', ['poetry', 'info', 'project']);
    this.refrashControl('add_Info', ['poetry']);
    this.refrashControl('imgCover_Src', ['gallery', 'info']);

    this.writeValue(this.saveForm);
  }

  refrashControl(field: string, pagesValidation: string[]) {
    this.saveForm.controls[field].reset();
    this.saveForm.controls[field].setErrors(null);

    this.saveForm.controls[field].setValidators([
      this.setValidatiorByPage(pagesValidation)
    ]);
  }

  setValidatiorByPage(pages: string[]) {
    if (this.isRequiredInPage(pages)) {
      return Validators.required;
    }
    return Validators.nullValidator;
  }

  isRequiredInPage(pages: string[]) {
    const page = pages.find(_page => _page === this.pageName);
    return (page) ? true : false;
  }

  back() {
    this.saveForm.controls['page'].reset();
    this.saveForm.controls['page'].setValue('');
    this.saveForm.controls['page'].setValidators([Validators.required]);

    this.setPageName(null);
  }

  onChange = (saveForm: FormGroup) => { };

  writeValue(saveForm: FormGroup): void {
    this.saveForm = saveForm;
    this.onChange(saveForm);
  }
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

}
