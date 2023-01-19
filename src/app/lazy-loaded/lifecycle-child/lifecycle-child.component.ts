import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { log } from 'src/app/logger';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.scss'],
})
export class LifecycleChildComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    OnDestroy,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit
{
  @Input() counter!: number;

  constructor() {
    log('LifecycleChildComponent - constructor', 'constructor');
  }
  ngDoCheck(): void {
    log('LifecycleChildComponent - ngDoCheck', 'lifecycle');
  }
  ngOnChanges(changes: SimpleChanges): void {
    log('LifecycleChildComponent - ngOnChanges', 'lifecycle');
  }
  ngOnDestroy(): void {
    log('LifecycleChildComponent - ngOnDestroy', 'lifecycle');
  }
  ngAfterContentChecked(): void {
    log('LifecycleChildComponent - ngAfterContentChecked', 'lifecycle');
  }
  ngAfterContentInit(): void {
    log('LifecycleChildComponent - ngAfterContentInit', 'lifecycle');
  }
  ngAfterViewChecked(): void {
    log('LifecycleChildComponent - ngAfterViewChecked', 'lifecycle');
  }
  ngAfterViewInit(): void {
    log('LifecycleChildComponent - ngAfterViewInit', 'lifecycle');
  }
  ngOnInit(): void {
    log('LifecycleChildComponent - ngOnInit', 'lifecycle');
  }
}
