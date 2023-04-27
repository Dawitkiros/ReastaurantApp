import { Component } from '@angular/core';
import { Menu } from '../Menu';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  menuForm: Menu = {
    menuId: 0,
    menuName: '',
    menuDescription: '',
    menuImage: '',
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
        dishImage: null,
        dishNature: '',
      },
    },
    isDeleted: false,
  };

  //To handle the image file uploaded by the user
  uploadedImage!: File;
  uploadedImageUrl: string | ArrayBuffer | null = '';
  extendedToCategoryForm: boolean = false;
  extendedToDishForm: boolean = false;

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public onImageUpload(event: any) {
    console.log('testing event ', event);
    this.uploadedImage = event.target.files[0];
    console.log(this.uploadedImage.name);

    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);

    reader.onload = (_event) => {
      this.uploadedImageUrl = reader.result;
      this.menuForm.menuImage = (reader.result as string).split(',')[1];
      console.log(' in onload()', this.menuForm.menuImage);
    };
  }

  //On click on Add Dish this will display the Add Dish Form
  extendToDishForm() {
    this.extendedToDishForm = !this.extendedToDishForm;
  }
   //On click on Add Dish this will display the Add Category Form
  extendToCategoryForm() {
    this.extendedToCategoryForm = !this.extendedToCategoryForm;
  }
 //This function takes us to create menu form
  createMenu() {
    console.log('Create menu called', this.menuForm);
    this.menuService.createMenu(this.menuForm).subscribe(() => {});
  }
}
