import { Component, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { log } from '../logger';

log('ContentComponent - Compilation', 'file');

@Component({
  standalone: true,
  selector: 'app-content',
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  constructor() {
    log('ContentComponent - constructor', 'constructor');
  }

  ngOnInit(): void {
    log('ContentComponent - ngOnInit', 'lifecycle');
  }
  ngDoCheck(): void {
    log('ContentComponent - ngDoCheck', 'lifecycle');
  }
  ngOnChanges(changes: SimpleChanges): void {
    log('ContentComponent - ngOnChanges', 'lifecycle');
  }
  ngAfterContentChecked(): void {
    log('ContentComponent - ngAfterContentChecked', 'lifecycle');
  }
  ngAfterContentInit(): void {
    log('ContentComponent - ngAfterContentInit', 'lifecycle');
  }
  ngAfterViewChecked(): void {
    log('ContentComponent - ngAfterViewChecked', 'lifecycle');
  }
  ngAfterViewInit(): void {
    log('ContentComponent - ngAfterViewInit', 'lifecycle');
  }
  ngOnDestroy(): void {
    log('ContentComponent - ngOnDestroy', 'lifecycle');
  }
}
