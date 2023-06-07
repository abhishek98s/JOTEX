import { Component, Input } from '@angular/core';
import { category } from 'src/app/Model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  @Input() category!: category;

}
