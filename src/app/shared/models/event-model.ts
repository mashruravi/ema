export class EventModel {

    id: string;
    name: string;
    date: Date;
    time: string;
    location: string;
    description: string;
    createdBy: string;
    createdOn: Date;

    constructor(
        id?: string,
        name?: string,
        date?: Date,
        time?: string,
        location?: string,
        description?: string,
        createdBy?: string,
        createdOn?: Date
    ) {
        this.id = id;
        this.name = name;
        this.date = new Date(date);
        this.time = time;
        this.location = location;
        this.description = description;
        this.createdBy = createdBy;
        this.createdOn = new Date(createdOn);
    }

}

export enum Status {
    SUCCESS,
    ERROR,
    PENDING
}
