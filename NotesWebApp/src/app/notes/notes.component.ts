import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { User } from '../helper_objects/user';
import { Note } from 'src/app/helper_objects/note';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  private user: User;
  private selectedNote: Note;

  constructor() {
    this.createUser();
  }

  async createUser(): Promise<any> {
    const session = await Auth.currentSession();
    const userData = session.getIdToken().payload;
    this.user = new User(userData['name'], userData['cognito:username']);
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
    this.user.addNote(new Note("", name));
  }

  private checkIfValidNoteName(name: string): boolean {
    if (name.length > 0 && name != "" && !this.checkIfNoteNameAlreadyExists(name)) {
      return true;
    }
    return false;
  }

  private checkIfNoteNameAlreadyExists(name: string): boolean {
    const userNotes = this.user.getNotes();
    for (var note of userNotes) {
      if (note.getName() === name) {
        return true;
      }
    }
    return false;
  }

  public onSelect(note: Note): void {
    this.selectedNote = note;
  }

  public getSelectedNote(): Note {
    return this.selectedNote;
  }

  ngOnInit(): void {
  }

  public getUser(): User {
    return this.user;
  }



}
