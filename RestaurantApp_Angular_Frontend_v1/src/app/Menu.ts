export interface Menu {
  menuId: number;
  menuName: string;
  menuDescription: string;
  menuImage: string | ArrayBuffer | null;
  category: {
    categoryId: number;
    categoryName: string;
    categoryDesc: string;
    categoryImage: string;
    dish: {
      dishId: number;
      dishName: string;
      dishDesc: string;
      dishPrice: number;
      dishImage: string | null;
      dishNature: string;
    };
  };
  isDeleted: boolean;
}
export interface Menus {
  menuId: number;
  menuName: string;
  menuDescription: string;
  menuImage: string | ArrayBuffer | null;
  category: number[];
}
export interface Category {
  categoryId: number;
  categoryName: string;
  categoryDesc: string;
  categoryImage: string;
  dish: number[];
}
export interface Dish {
  dishId: number;
  dishName: string;
  dishDesc: string;
  dishPrice: number;
  dishImage: string | null;
  dishNature: string;
}
