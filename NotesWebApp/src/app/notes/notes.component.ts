import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { Note } from '../note';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  user: User;
  notes: Note[];

  constructor(private api: APIService, private router: Router) {
    this.notes = [];
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async user => {
      this.user = new User(user.attributes.sub, user.attributes.name, user.attributes.email, []);
    })
      .catch(err => console.log(err));
  }

  public logOut(): void {
    Auth.signOut({ global: true })
      .then(data => {
        this.router.navigate(['/auth']);
      })
      .catch(err => console.log(err));
  }

  ngOnInit(): void {
  }

}
