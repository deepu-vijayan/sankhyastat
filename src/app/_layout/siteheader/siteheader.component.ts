import { Component, OnInit } from '@angular/core';

import { DataServiceApiService } from '../../services/data-service-api.service';


@Component({
  selector: 'app-siteheader',
  templateUrl: './siteheader.component.html',
  styleUrls: ['./siteheader.component.scss'],
  providers: [DataServiceApiService]
})
export class SiteheaderComponent implements OnInit {

  mArticles:Array<any>;
  mSources:Array<any>;

  constructor(private dataServicesApi:DataServiceApiService) { }

  ngOnInit() {
    //load articles
    this.dataServicesApi.initArticles().subscribe(data => this.mArticles = data['articles']);
    //load news sources
    this.dataServicesApi.initSources().subscribe(data=> this.mSources = data['sources']);  
  }


  searchArticles(source){
    console.log("selected source is: "+source);

    this.dataServicesApi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

}
