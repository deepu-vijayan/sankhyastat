import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DataServiceApiService } from '../../services/data-service-api.service';


@Component({
  selector: 'app-siteheader',
  templateUrl: './siteheader.component.html',
  styleUrls: ['./siteheader.component.scss'],
  providers: [DataServiceApiService]
})
export class SiteheaderComponent implements OnInit {
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
