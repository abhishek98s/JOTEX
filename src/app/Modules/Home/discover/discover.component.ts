import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/Model/category';
import { JobCategoryService } from './job-category.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  categories!: category[];

  constructor(public categoryService: JobCategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }
}
