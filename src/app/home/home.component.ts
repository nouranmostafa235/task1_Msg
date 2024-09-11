import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private service:UserdataService , private route:Router){ }
  userData:any
  searchTerm:string=""
  ngOnInit(): void {
    this.service.getUserData().subscribe({
      next:(response)=>{
        this.userData=response 
      }
    })
  }
 navigation(id:any){
  this.route.navigate(['/userDetails'],{queryParams:{id:id}})
 }
}
