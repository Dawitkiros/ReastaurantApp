import { Category, Dish, Menu, Menus } from './Menu';

export class ObjectMapper {
  public getUniqueElemnts(responseObj: any) {
    const uniqueArray = responseObj.filter((value: any, index: any) => {
      const _value = JSON.stringify(value);
      return (
        index ===
        responseObj.findIndex((obj: any) => JSON.stringify(obj) === _value)
      );
    });
    return uniqueArray;
  }

  public getMenus(responseObj: Menu[], returnObj: Menus[] ) {
    var res: Menu;
    for (res of responseObj) {
      var current: Menus = {
        menuId: 0,
        menuName: '',
        menuDescription: '',
        menuImage: null,
        category: [],
      };
      current.menuId = res.menuId;
      current.menuName = res.menuName;
      current.menuDescription = res.menuDescription;
      current.menuImage = res.menuImage;

      returnObj?.push(current);
    }
    // console.log('uniques ', this.getUniqueElemnts(returnObj));
    return this.getUniqueElemnts(returnObj);
  }

  public getCategories(responseObj: Menu[], returnObj: Category[] ) {
     var res: Menu;
     for (res of responseObj) {
       var current: Category = {
            categoryId: 0,
            categoryName: '',
            categoryDesc: '',
            categoryImage: '',
            dish: []
       };
       current.categoryId = res.category.categoryId;
       current.categoryName = res.category.categoryName;
       current.categoryDesc = res.category.categoryDesc;
       current.categoryImage = res.category.categoryImage;
 
       returnObj?.push(current);
     }
    //  console.log('uniques ', this.getUniqueElemnts(returnObj));
    return this.getUniqueElemnts(returnObj);
   }

   public getDishes(responseObj: Menu[], returnObj: Dish[] ) {
     var res: Menu;
     for (res of responseObj) {
       var current: Dish = {
            dishId: 0,
            dishName: '',
            dishDesc: '',
            dishPrice: 0,
            dishImage: null,
            dishNature: ''
       };
       current.dishId = res.category.dish.dishId;
       current.dishName = res.category.dish.dishName;
       current.dishDesc = res.category.dish.dishDesc;
       current.dishPrice = res.category.dish.dishPrice;
 
       returnObj?.push(current);
     }
    //  console.log('uniques ', this.getUniqueElemnts(returnObj));
    return this.getUniqueElemnts(returnObj);
   }
}
