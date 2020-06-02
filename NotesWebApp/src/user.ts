import { Note } from './note';

export class User {

    private name: string;
    private username: string;
    private notes: Array<Note>;

    constructor(name: string, username: string) {
        this.name = name;
        this.username = username;
    }

    public getName(): string {
        return this.name;
    }

    public getUsername(): string {
        return this.username;
    }

    public getNotes(): Array<Note> {
        return this.notes;
    }

    public addNote(name: string, note: string): void {
        this.notes.push(new Note(note, name));
    }


}