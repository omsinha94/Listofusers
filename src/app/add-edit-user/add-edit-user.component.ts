import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from './../data.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {

  visible: boolean = false;
  editUser: any;
  userForm = {
    userId: null,
    name: '',
    email: '',
    phone: '',
    website: ''
  };
  constructor(private router: Router, private activatedRoute: ActivatedRoute, public dataService: DataService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.visible = true;
    }, 0);
    this.editUser = this.activatedRoute.snapshot.queryParamMap.get('edit');
    if (this.editUser && this.dataService.userData) {
      this.userForm.userId = this.dataService.userData.userId;
      this.userForm.name = this.dataService.userData.title;
      this.userForm.website = this.dataService.userData.body;
    }
    if(!this.dataService.userData){
      this.router.navigate(['/user_list']);
    }
  }

  submit() {
    this.dataService.createUser(this.userForm)
      .subscribe(res => {
        this.router.navigate(['/user_list']);
      }, err => {
        console.log(err);
      })
  }

  save() {
    this.dataService.updateUser(this.userForm.userId, this.userForm)
      .subscribe(res => {
        this.router.navigate(['/user_list']);
      }, err => {
        console.log(err);
      })
  }

}
