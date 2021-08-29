import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  visible: boolean = false;
  userList: Array<any> = []

  constructor(private router: Router, public dataService: DataService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.visible = true;
    }, 0);
    this.getUserList();
  }

  getUserList() {
    this.dataService.getUser()
      .subscribe((res: any) => {
        this.userList = res;
      }, err => {
        console.log(err);
      })
  }
  editUser(data) {
    this.dataService.userData = data;
    this.router.navigate(['/add_edit_user'], { queryParams: { edit: true } });
  }

}
