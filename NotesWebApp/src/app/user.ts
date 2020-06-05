import { Note } from './note';

export class User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public notes: Note[] = []
    ) { }

    public addNote(note: Note): void {
        this.notes.push(note);
    }

    public removeNote(name: string): void {
        for (var i = 0; i < this.notes.length; i++) {
            if (this.notes[i].name === name) {
                this.notes.splice(i, 1);
                i--;
            }
        }
    }
}
