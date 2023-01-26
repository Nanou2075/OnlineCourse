import { Component, OnInit } from '@angular/core';
import { CategoryModule } from '../../models/category/category.module';
import { CategoryService } from '../../services/body/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  Categories:CategoryModule[]=[]
  constructor( private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategory();
  }
  getCategory() {
    return this.categoryService.getCategory().subscribe({
      next:(data:any)=> {
        this.Categories =data['categories'];
     console.log("le resultat est ",data['categories']);

    },
    error:(err)=>{
      console.log(err);
      sessionStorage.setItem('isConnected','true');
      sessionStorage.setItem('token','')
      
      
    }
  })
}
}
