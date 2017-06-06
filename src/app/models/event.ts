export class Event {

  id: string;
  name: string;
  edate: Date;
  etime: string;
  createdOn: Date;
  createdBy: string;
  location: string;
  description: string;

  constructor(
    id: string,
    name: string,
    edate: Date,
    etime: string,
    createdOn: Date,
    createdBy: string,
    location: string,
    description: string
  ) {

    this.id = id;
    this.name = name;
    this.edate = edate;
    this.etime = etime;
    this.createdOn = createdOn;
    this.createdBy = createdBy;
    this.location = location;
    this.description = description;

  }

}