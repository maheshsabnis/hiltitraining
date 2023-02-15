import { AbstractControl } from "@angular/forms";

export class CustomValidator {
  // AbstractControl: The FormControl Type
  // on which validator is applied
  // 'any': it is 'null' for valid else JSON object
  // JSON object: is ValidationErrors type
  // {Key:Value} e.g. {valid:false} OR {invalid:true}
  // {even:true} or {odd:true}
  static checkEven(ctrl:AbstractControl):any {
     let val:number = parseInt(ctrl.value);
     if(val % 2 === 0){
      return null;
     }
     return {even:false};
  }
}
