import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blobToUrl',
})
export class BlobToUrlPipe implements PipeTransform {
  transform(value: any): any {
    window.atob(value);
    return 'data:image/png;base64,' + value;
  }
}
