import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HomeService } from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieList: any;
  movieItem: any;
  movieItem1: any;
  movieItem2: any;
  imgBaseUrl : any;
  
  constructor(private routes:Router, private homeservice:HomeService) { 
    this.imgBaseUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"
    this.movieList = [];

    this.homeservice.getMovieList().subscribe(movie => {

      for (let i = 0; i < movie.results.length; i++){
        if (i < 4){
          this.movieList.push(movie.results[i]);
        } else {
          break;
        }
      }
      console.log(movie)
    });

    this.movieItem = [];

    this.homeservice.getMovieItem().subscribe(movie => {

      for (let i = 0; i < movie.results.length; i++){
        if (i < 4){
          this.movieItem.push(movie.results[i]);
        } else {
          break;
        }
      }
      console.log(movie)
    });

    this.movieItem1 = [];

    this.homeservice.getMovieItem1().subscribe(movie => {

      for (let i = 0; i < movie.results.length; i++){
        if (i < 4){
          this.movieItem1.push(movie.results[i]);
        } else {
          break;
        }
      }
      console.log(movie)
    });

    this.movieItem2 = [];

    this.homeservice.getMovieItem2().subscribe(movie => {

      for (let i = 0; i < movie.results.length; i++){
        if (i < 4){
          this.movieItem2.push(movie.results[i]);
        } else {
          break;
        }
      }
      console.log(movie)
    });
  }

  ngOnInit(): void {
  }
  getImgURL(imgId:any){
    return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${imgId}`
  }
}
