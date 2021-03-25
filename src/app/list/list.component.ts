import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ListService } from "./list.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  movieList:any
  imgBaseUrl : any;
  constructor(private routes:Router, private listservice:ListService, private SpinnerService: NgxSpinnerService) { 
    this.imgBaseUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";
    this.movieList = [];
  }

  ngOnInit(): void {
    this.Getmovielist();
  }
  getImgURL(imgId:any){
    return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${imgId}`
  }
  Getmovielist() {
    this.SpinnerService.show();
    this.listservice.getMovieList().subscribe(movie => {
      this.movieList = movie.results;
      this.SpinnerService.hide();
      console.log(movie)
    });
  }
}
