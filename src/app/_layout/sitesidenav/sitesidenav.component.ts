import { Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit, Input } from '@angular/core';
import { DataServiceApiService } from '../../services/data-service-api.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sitesidenav',
  templateUrl: './sitesidenav.component.html',
  styleUrls: ['./sitesidenav.component.scss'],
  providers: [DataServiceApiService]
})
export class SiteSideNavComponent implements AfterViewInit {
  @ViewChild('sidenav') sidenav:MatSidenav;
  @Input() sidenavStatus:boolean;
  constructor() { }



  ngAfterViewInit() {
  }


  onToggleSidenav = () => {
    this.sidenav.toggle();
  }

}
