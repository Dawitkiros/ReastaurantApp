import { Pipe, PipeTransform } from '@angular/core';
import { Menu } from './Menu';

// @Pipe({
//   name: 'menuSearch'
// })
// export class MenuSearchPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }


@Pipe({
  name: 'menuSearch'
})
export class MenuSearchPipe implements PipeTransform {
  transform(menuItems: Menu[], searchTerm: string): Menu[] {
    if (!menuItems || !searchTerm) {
      return menuItems;
    }

    searchTerm = searchTerm.toLowerCase();

    return menuItems.filter(item =>
      item.menuName.toLowerCase().includes(searchTerm) ||
      item.menuDescription.toLowerCase().includes(searchTerm) ||
      item.category.categoryName.toLowerCase().includes(searchTerm) ||
      item.category.categoryDesc.toLowerCase().includes(searchTerm) ||
      item.category.dish.dishName.toLowerCase().includes(searchTerm) ||
      item.category.dish.dishDesc.toLowerCase().includes(searchTerm) ||
      item.category.dish.dishNature.toLowerCase()===searchTerm.toLocaleLowerCase() 
      // item.category.dish.dishNature.toLowerCase().startsWith(searchTerm)
    );
  }
}
