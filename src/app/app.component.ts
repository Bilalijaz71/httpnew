import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Post} from './Post.model' 
import { FetchService } from './file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
isFetching=true;
loadedPosts:Post[]=[];

  constructor(private http: HttpClient,private functionservice:FetchService) {}

  ngOnInit() {
    this.isFetching=true;
    this.functionservice.fetchingData().subscribe(getting=>{
this.isFetching=false;
this.loadedPosts=getting;
    });
  }
  onCreatePost(postData:Post){
  this.functionservice.CreateandstorePost(postData.title,postData.content);
  
  }
  onFetchPosts() {
    // Send Http request
    this.isFetching=true;
    this.functionservice.fetchingData().subscribe(getting=>{
      this.isFetching=false;
      this.loadedPosts=getting;
          });
  }

  onClearPosts() {
    // Send Http request
    this.functionservice.deletePost().subscribe(del=>{
this.loadedPosts=[];
    })
  }
}
