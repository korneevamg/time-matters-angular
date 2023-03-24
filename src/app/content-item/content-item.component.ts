import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { log } from '../logger';

log('ContentItemComponent - Compilation');

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.scss'],
})
export class ContentItemComponent implements OnDestroy, OnInit {
  public lastVisited!: Date;

  constructor() {
    log('ContentItemComponent - constructor', 'constructor');
  }

private setRandomDate(){
  let end = new Date();
  let start = new Date('12/04/2022'); // Don't repeat at home!
  let diff =  end.getTime() - start.getTime();
  let new_diff = diff * Math.random();
  let date = new Date(start.getTime() + new_diff);
  return date;
}

  ngOnInit(): void {
  this.lastVisited = this.setRandomDate();
    log('ContentItemComponent - ngOnInit', 'lifecycle');
  }
  ngDoCheck(): void {
    log('ContentItemComponent - ngDoCheck', 'lifecycle');
  }
  ngOnChanges(changes: SimpleChanges): void {
    log('ContentItemComponent - ngOnChanges', 'lifecycle');
  }
  ngAfterContentChecked(): void {
    log('ContentItemComponent - ngAfterContentChecked', 'lifecycle');
  }
  ngAfterContentInit(): void {
    log('ContentItemComponent - ngAfterContentInit', 'lifecycle');
  }
  ngAfterViewChecked(): void {
    log('ContentItemComponent - ngAfterViewChecked', 'lifecycle');
  }
  ngAfterViewInit(): void {
    log('ContentItemComponent - ngAfterViewInit', 'lifecycle');
  }
  ngOnDestroy(): void {
    log('ContentItemComponent - ngOnDestroy', 'lifecycle');
  }

  public interact() {
    log('needed to interact with the website so that beforeunload fires', 'beforeunload');
  }
}
