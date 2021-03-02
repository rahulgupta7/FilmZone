// import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
// import { Observable } from "rxjs";
// import { environment } from "../../environments/environment";

// @Injectable ({
//     providedIn: "root"
// })

// export class DashboardService {
//     apiKey = environment.API_KEY;
//     constructor(private http:HttpClient){

//     }
//     getMovielist():Observable<any> {
//         return this.http.get(`https://api.themoviedb.org/3/movie/lists?api_key=${this.apiKey}&language=en-USpage=1`)
//     };

//     getMovieDetails(id: any):Observable<any> {
//         return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US`)
//     }
// }