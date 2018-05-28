import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    users: User[];

    @Input() userName = '';
    @Input() userEmail: string;
    @Input() userId: number;

    constructor(public userService: UserService) { }

    ngOnInit() {
        this.userService.getUsers()
            .subscribe(res => { this.users = res; });
    }

    createUser() {

        const user = {
            name: this.userName,
            email: this.userEmail,
            id: this.userId
        };

        this.userName = '';
        this.userEmail = '';
        this.userService.createUser(user);
    }
}
