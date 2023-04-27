import { Component, DoCheck } from '@angular/core';
import { MenuService } from '../service/menu.service';
import { Menu } from '../Menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  
  //To implement the concept of pagination
  menus: any;
  pageSize: number = 2;
  pageNumber: number = 1;
  offset: number = (this.pageNumber-1) * this.pageSize;
  limit: number = this.pageSize;

  menuItems: Menu[] = [
    // your menu items from the JSON here
  ];
  searchTerm: string = '';

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService
      .getAllMenuItem(this.offset, this.limit)
      .subscribe((res) => {
        this.menus = res;
      });
  }
  //This method changes the pageSize
  changePageSize(pageSize: number) {    
    this.pageSize = pageSize;
    this.offset = this.pageNumber * this.pageSize;
    this.limit = this.pageSize;
    this.ngOnInit();
  }

  //This function is called on click of prev button
  prevPage() {
    this.pageNumber -= 1;
    this.offset = this.pageNumber * this.pageSize;
    this.ngOnInit();
  }
  //This function is called on click of next button
  nextPage() {
    this.pageNumber += 1;
    this.offset = this.pageNumber * this.pageSize;
    this.ngOnInit();
  }
  //This function calls the deleteMenu api
  deleteMenu(menuId: number) {
    this.menuService.deleteMenu(menuId).subscribe((data) => {
      this.menus = data;
    });
  }
}
