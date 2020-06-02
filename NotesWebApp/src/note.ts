export class Note {

    private note: string;
    private name: string;

    constructor(note: string, name: string) {
        this.note = note;
        this.name = name;
    }

    public getNote(): string {
        return this.note;
    }

    public getName(): string {
        return this.name;
    }

    public setNote(note: string): void {
        this.note = note;
    }
}