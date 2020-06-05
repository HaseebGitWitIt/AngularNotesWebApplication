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
  selectedNote: Note;

  constructor(private api: APIService, private router: Router) {
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
