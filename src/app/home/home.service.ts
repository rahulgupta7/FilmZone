import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable ({
    providedIn: "root"
})

export class HomeService {
    apiKey = environment.API_KEY;
    constructor(private http:HttpClient){

    }
    getMovieList():Observable<any> {
        return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-USpage=1`)
    };

    getMovieItem():Observable<any> {
        return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=1`)
    };

    getMovieItem1():Observable<any> {
        return this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`)
    };

    getMovieItem2():Observable<any> {
        return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=1`)
    }

    getSingleMovie(id:any):Observable<any> {
        return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en`)
    }
}