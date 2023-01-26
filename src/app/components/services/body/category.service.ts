import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { CategoryModule } from '../../models/category/category.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = environment.apiUrl+'category';
  constructor( private http : HttpClient) { }

  getCategory():Observable<CategoryModule[]>{
    return this.http.get<CategoryModule[]>(this.url);

  }
}
