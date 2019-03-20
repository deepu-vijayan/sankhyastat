import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceApiService {

  api_key = '9defc730b4aa492e9e3b769c3f69256c';
  sidenav: any = null;

  constructor(private http:HttpClient) { }
  initSources(){
     return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }
  initArticles(){
   return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }
  getArticlesByID(source: String){
   return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }

  public closeNav() {
    this.sidenav.close();
  }

  public openNav() {
    this.sidenav.open();
  }

  public toggle() {
    this.sidenav.toggle();
  }
}
