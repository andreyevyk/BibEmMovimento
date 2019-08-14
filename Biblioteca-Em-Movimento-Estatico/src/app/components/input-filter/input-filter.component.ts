import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PageContent } from 'src/app/interfaces/project-card-content';
import { FindContentService } from 'src/app/services/find-content.service';
import { PageEnum } from 'src/app/interfaces/PageEnum';

@Component({
  selector: 'input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFilterComponent),
      multi: true,
    }
  ]
})
export class InputFilterComponent implements OnInit, ControlValueAccessor {

  @Input()
  searchBy: 'content' | 'title';

  @Input()
  page:  PageEnum;
  
  content: PageContent[];
  search: string;

  constructor(
    private findContentService: FindContentService
  ) { }

  ngOnInit() {
  }

  filterContent(search: string) {
    const searchBy = this.searchBy;
    const where = (search != '') ? {searchBy,search} : null;
    const content = this.findContentService.getContent(this.page, where);

    this.writeValue(content);
  }

  onChange = (content: PageContent[]) => { };

  writeValue(content: PageContent[]): void {
    this.content = content;
    this.onChange(content);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
