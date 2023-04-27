import { Injectable } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { HttpClient } from '@angular/common/http';
import { Observable, first } from 'rxjs';
import { Menu } from '../Menu';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient, private router: Router) {}

  public getAllMenuItem(offset: number , limit : number): Observable<Menu[]> {
    return this.http.get<Menu[]>(`http://localhost:8080/api/menuitems/${offset}/${limit}`);
  }
  public getMenuById(menuId: number): Observable<Menu[]> {
    console.log('menuid', menuId);

    return this.http
      .get<Menu[]>('http://localhost:8080/api/menuitem/' + menuId)
      .pipe(first());
  }

  public createMenu(payload: Menu): Observable<void> {
     return this.http.post<void>(`http://localhost:8080/api/menuitem`, payload);
  }

  public updateMenu(payload: any): Observable<any> {
    console.log('I am here', payload);
    return this.http.put<any>(
      `http://localhost:8080/api/menuitem/${payload.menuId}`,
      payload
    );
  }

  public deleteMenu(menuId: number) {
    return this.http.delete<Menu[]>(
      `http://localhost:8080/api/menuitem/${menuId}`
    );
  }
}
