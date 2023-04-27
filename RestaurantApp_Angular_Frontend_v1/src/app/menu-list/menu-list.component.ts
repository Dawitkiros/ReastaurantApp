import { Component } from '@angular/core';
import { Category, Dish, Menu, Menus } from '../Menu';
import { MenuService } from '../service/menu.service';
import { ObjectMapper } from '../objectMapper';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
})
export class MenuListComponent {
  _menu: Menu[] = [];

  menus: Menus[] = [];
  categories: Category[] = [];
  dishes: Dish[] = [];

  pageSize: number = 14;
  pageNumber: number = 1;
  offset: number = (this.pageNumber-1) * this.pageSize;
  limit: number = this.pageSize;
  searchTerm: string = '';

  constructor(
    private menuService: MenuService,
    private objectMapper: ObjectMapper
  ) {}

  ngOnInit() {
    this.menuService
      .getAllMenuItem(this.offset, this.limit)
      .subscribe((res) => {
        this._menu = res;
        this.menus = this.objectMapper.getMenus(this._menu, this.menus);
      });
  }

  //Prompts an alert before deleting
  confirmDelete(menuId: number) {
    if (confirm('Are you sure you want to delete this menu item?')) {
      this.deleteMenu(menuId);
    }
  }

  //Calls the delete function for soft delete
  deleteMenu(menuId: number) {
    this.menuService.deleteMenu(menuId).subscribe((data) => {
      this._menu = data;
      console.log("_menu", this._menu);
      
      this.menus = this.objectMapper.getMenus(this._menu, this.menus);
      console.log("menus", this.menus);
      
    });
  }
}
