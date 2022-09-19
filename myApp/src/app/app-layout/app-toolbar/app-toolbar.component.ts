import { Component, ElementRef, ViewChild  } from '@angular/core';
import { LayoutService } from "../service/app.layout.service";
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html'
})
export class AppToolbarComponent {

  
  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService) { }

}
