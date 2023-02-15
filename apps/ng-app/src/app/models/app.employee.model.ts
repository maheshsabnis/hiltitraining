export class Employee {
  [x:string]:any;
  constructor(
    public EmpNo:number,
    public EmpName:string,
    public DeptName: string,
    public Salary:number,
    public Designation:string
  ){}
}
