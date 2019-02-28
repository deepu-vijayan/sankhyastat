import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DataServiceApiService } from '../../services/data-service-api.service';


@Component({
  selector: 'app-sitesidenav',
  templateUrl: './sitesidenav.component.html',
  styleUrls: ['./sitesidenav.component.scss'],
  providers: [DataServiceApiService]
})
export class SiteSideNavComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private dataServicesApi:DataServiceApiService) { }

  ngOnInit() {
    //load articles
    //load news sources
  }


  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
