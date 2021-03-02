import { Component, OnInit } from '@angular/core';
import { PopularService } from "../popular/popular.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  movie:any;
  constructor(private popularService:PopularService, private route:ActivatedRoute) { 
    this.movie = {
     
    }


    this.route.params.subscribe(params => {
      console.log(params);
      this.popularService.getSingleMovie(params.id).subscribe(movie => {
        console.log(movie);
        this.movie =  movie;
      })
    })
  }

  ngOnInit(): void {
  }

  getImgURL(imgId:any){
    return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${imgId}`
  }

}
