import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PopularComponent } from "./popular/popular.component";
import { ListComponent } from "./list/list.component";
import { TopComponent } from "./top/top.component";
import { LatestComponent } from "./latest/latest.component";
import { HomeComponent } from "./home/home.component";
import { ViewComponent } from "./view/view.component";

export const router:Routes = [
    {
        path: "dashboard",
        component: DashboardComponent,
        children:[
            {
                path:"home",
                component:HomeComponent
             },

            {
                path:"popular",
                component:PopularComponent
             },

            {
               path:"list",
               component:ListComponent
            },
            
            {
               path:"top",
               component:TopComponent
            },

            {
                path:"latest",
                component:LatestComponent
            },
            {
                path:"view/:id",
                component: ViewComponent
            },
            {
                path:"",
                redirectTo:"/dashboard/home",
                pathMatch:"full"
            }
         ]
    },

    {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
    },

    
]