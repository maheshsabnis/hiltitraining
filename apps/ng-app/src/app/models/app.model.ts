export class Person {
  constructor(
    public PersonId:number,
    public PersonName:string,
    public City:string,
    public Location:Address
  ){}
}

export class Address {
  constructor(public Street:string, public Area:string){}
}
