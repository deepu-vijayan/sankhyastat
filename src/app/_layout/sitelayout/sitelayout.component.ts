import { Component, ViewChild, ElementRef, ViewEncapsulation, OnInit } from '@angular/core';
import { DataServiceApiService } from '../../services/data-service-api.service';
import { SiteSideNavComponent} from '../sitesidenav/sitesidenav.component';
import { MatSidenav } from '@angular/material';
@Component({
  selector: 'app-sitelayout',
  templateUrl: './sitelayout.component.html',
  styleUrls: ['./sitelayout.component.scss'],
  providers: [DataServiceApiService]
})

export class SitelayoutComponent implements OnInit {
  @ViewChild('lsidenav') lsidenav: MatSidenav;
  
  constructor(private dataServicesApi:DataServiceApiService) { }



  ngOnInit() {
    //this.dataServicesApi.sidenav = this.sidenav;
  }

  toggleSideBar(eventData){
    if(eventData == 'toggle'){
      this.lsidenav.toggle();
    }
  }

}
