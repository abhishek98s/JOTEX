import { Injectable } from '@angular/core';
import { category } from 'src/app/Model/category';

@Injectable({
  providedIn: 'root'
})
export class JobCategoryService {
  categories: category[] = [
    {
      svgUrl: 'assets/svg/tech.svg',
      title: "tech",
      number: 243
    },
    {
      svgUrl: 'assets/svg/sales.svg',
      title: "sales",
      number: 232
    },
    {
      svgUrl: 'assets/svg/marketing.svg',
      title: "Marketing",
      number: 583
    },
    {
      svgUrl: 'assets/svg/accounting.svg',
      title: "Accounting",
      number: 152
    }
  ]

  constructor() { }


  getCategories() {
    return this.categories;
  }
}
