import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe";

@Component({
  selector:    'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [
    new Recipe("Blouse", "This is one simple blouse", "http://www.fashionlady.in/wp-content/uploads/2016/09/Blouse-Design-Patterns.jpg")
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
