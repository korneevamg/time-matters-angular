import { Component } from '@angular/core';
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
}
