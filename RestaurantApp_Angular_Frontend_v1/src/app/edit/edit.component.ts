import { Component } from '@angular/core';
import { Menu } from '../Menu';
import { MenuService } from '../service/menu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  menuForm: Menu = {
    menuId: 0,
    menuName: '',
    menuDescription: '',
    menuImage: null,
    category: {
      categoryId: 0,
      categoryName: '',
      categoryDesc: '',
      categoryImage: '',
      dish: {
        dishId: 0,
        dishName: '',
        dishDesc: '',
        dishPrice: 0,
        dishImage: '',
        dishNature: '',
      },
    },
    isDeleted: false,
  };

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var menuId = Number(param.get('menuId'));
      this.getMenuById(menuId);
      console.log('tetsing 42: menuid', menuId, this.menuForm);
    });
  }

  //Gets the item based on the menu Id
  getMenuById(menuId: number) {
    this.menuService.getMenuById(menuId).subscribe((data) => {
      console.log('Cheking Data :', data);
      this.menuForm = data[0];
    });
  }

  //This function calls the updateMenu call
  updateMenu(menuId: number) {
    this.menuService.updateMenu(this.menuForm).subscribe({
      next: (data: any) => {
        this.router.navigate(['/MenuList']);
      },
      error: (err) => {
        console.log('Somethign went wrong');
      },
    });
  }
}
