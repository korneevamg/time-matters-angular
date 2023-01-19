import { Component, OnDestroy, OnInit } from '@angular/core';
import { log } from '../logger';

log('ContentItemComponent - Compilation');

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.scss'],
})
export class ContentItemComponent implements OnDestroy, OnInit {
  constructor() {
    log('ContentItemComponent - constructor', 'constructor');
  }
  ngOnInit(): void {
    log('ContentItemComponent - ngOnInit', 'lifecycle');
  }
  ngOnDestroy(): void {
    log('ContentItemComponent - ngOnDestroy', 'lifecycle');
  }

  public interact() {
    log('needed to interact with the website so that beforeunload fires', 'beforeunload');
  }
}
