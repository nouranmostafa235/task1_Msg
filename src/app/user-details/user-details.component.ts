import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
constructor(private route:ActivatedRoute , private service:UserdataService){}
userId:any
data:any
ngOnInit(): void {
  this.route.queryParams.subscribe(param=>{this.userId=param["id"]})
  this.service.getUserById(this.userId).subscribe({
    next:(response)=>{
      this.data=response.data
      console.log(response);
      
    }
  })

}
}
