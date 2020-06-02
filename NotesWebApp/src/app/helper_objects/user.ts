import { Note } from './note';

export class User {

    private name: string;
    private username: string;
    private notes: Note[];

    constructor(name: string, username: string) {
        this.name = name;
        this.username = username;
        this.notes = [];
    }

    public getName(): string {
        return this.name;
    }

    public getUsername(): string {
        return this.username;
    }

    public getNotes(): Note[] {
        return this.notes;
    }

    public addNote(note: Note): void {
        this.notes.push(note);
    }


}