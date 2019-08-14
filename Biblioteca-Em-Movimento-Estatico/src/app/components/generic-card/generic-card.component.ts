import { Component, OnInit, Input } from '@angular/core';
import { PageContent } from 'src/app/interfaces/project-card-content';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.css']
})
export class GenericCardComponent implements OnInit {

  @Input()
  content: PageContent;
  
  @Input()
  isLeft: boolean;

  constructor() { }

  ngOnInit() {
  }

}
