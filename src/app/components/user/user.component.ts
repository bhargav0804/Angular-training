import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/utility/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userForm=new FormGroup({
    id:new FormControl(''),
    email:new FormControl(''),
    first_name:new FormControl(''),
    last_name:new FormControl(''),

  })

  users:any[]=[];
  
  alert:boolean=true;
  //  item:any='';
   collection:any=[];

  constructor(private userserv:UsersService) { }

  ngOnInit(): void {
    this.userserv.getUsers().subscribe(
      (res:any)=>{
      const data=res.data;
      this.users = data;
      });
  }

  postData()
  {
    this.userserv.createUsers(this.userserv.createUsers).subscribe((Result)=>
    {
      this.alert=true;
      console.log("Data Added successfully",Result);
    })
  }

  deleteUser(item:any)
  {
    this.collection.splice(item-1,1);
    this.userserv.deleteUser(item).subscribe((Result)=>{
      console.log("Result:",Result);
    })

} 
onEnter()
    {
      console.log(this.userForm);
    }

}
