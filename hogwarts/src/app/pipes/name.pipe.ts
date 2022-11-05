import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: any, firstName: string, lastName:string): string {
    return firstName + " " + lastName;
  }

}
