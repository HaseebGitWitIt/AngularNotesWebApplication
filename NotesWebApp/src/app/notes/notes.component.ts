import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { User } from '../../user';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  private user: User;

  constructor() {
    this.createUser();
  }

  ngOnInit(): void {
  }

  public getUser(): User {
    return this.user;
  }

  async createUser(): Promise<any> {
    const session = await Auth.currentSession();
    const userData = session.getIdToken().payload;
    this.user = new User(userData['name'], userData['cognito:username']);
  }

}
