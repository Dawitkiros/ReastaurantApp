import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgToBlob',
})
export class ImgToBlobPipe implements PipeTransform {
  transform(img: any): any {
    if (img != null) {
      console.log("img", img);
      
      const imgBlob = window.atob(img);
      console.log('uploaded img blob', imgBlob);
      return imgBlob;

    }
    console.log("img null check");
    
    return null;      
  }
}
