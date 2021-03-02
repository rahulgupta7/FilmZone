import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LatestService } from "./latest.service";

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {
  movieList:any
  imgBaseUrl : any;

  constructor(private routes:Router, private latestservice:LatestService) { 
    this.imgBaseUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";
    this.movieList = [];

    this.latestservice.getMovieList().subscribe(movie => {
      this.movieList = movie.results;
      console.log(movie)
    });
  }

  ngOnInit(): void {
  }
  getImgURL(imgId:any){
    return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${imgId}`
  }
}
