import { Component, OnInit, NgZone } from '@angular/core';
import { APIService } from '../API.service';
import { Note } from '../note';
import { Auth, API } from 'aws-amplify';
import { Router } from '@angular/router';
import { User } from '../user';

const API_NAME = "notesAppApi";
const NOTES_PATH = "/notes/object";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  user: User;
  selectedNote: Note;

  constructor(private ngZone: NgZone, private api: APIService, private router: Router) {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async user => {
      this.user = new User(user.attributes.sub, user.attributes.name, user.attributes.email, []);
      this.getUserNotes();
    })
      .catch(err => console.log(err));

  }

  private getUserNotes(): void {
    API
      .get(API_NAME, NOTES_PATH, {
        headers: {},
        response: true,
        queryStringParameters: {
          id: this.user.id
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  public saveNote(): void {
    alert("Hello world.")
  }

  public deleteNote(): void {
    alert("Needs to be implemented.")
  }

  public logOut(): void {
    Auth.signOut({ global: true })
      .then(() => {
        // this.ngZone.run(() => this.router.navigate(['/login']));
        window.location.reload();
      })
      .catch(err => console.log(err));

  }

  public openNewNoteModal(): void {
    const noteName = prompt("Enter a name for your note: ").trim();

    if (this.checkIfValidNoteName(noteName)) {
      this.createNote(noteName);
    } else {
      alert("Sorry, that name is either invalid or already in use!")
    }

  }

  private createNote(name: string): void {
    var temp = new Note(this.user.id, name, "");
    this.user.addNote(temp);
    setTimeout(() => this.selectNote(temp), 500);

  }

  private selectNote(note: Note): void {
    const scroll = document.getElementById("names");
    scroll.scrollTop = scroll.scrollHeight;
    this.selectedNote = note;
  }

  private checkIfValidNoteName(name: string): boolean {
    if (name.length > 0 && name != "" && !this.checkIfNoteNameAlreadyExists(name)) {
      return true;
    }
    return false;
  }

  private checkIfNoteNameAlreadyExists(name: string): boolean {
    const userNotes = this.user.notes;
    for (var note of userNotes) {
      if (note.name === name) {
        return true;
      }
    }
    return false;
  }

  public onSelect(note: Note): void {
    if (this.selectedNote === note) {
      this.selectedNote = null;
    } else {
      this.selectedNote = note;
    }
  }


  ngOnInit(): void {
  }

}
