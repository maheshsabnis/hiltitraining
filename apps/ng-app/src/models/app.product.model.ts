export class Product{
[x:string]:any;
  constructor(
    public ProductRowId:number,
    public ProductId:string,
    public ProductName:string,
    public Description:string,
    public Price:number,
    public CategoryId:number,
    public Manufacturer:string
  ){}
}
