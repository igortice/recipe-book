import { Injectable } from '@angular/core';
import { Recipe } from "./recipe";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("Blouse", "This is one simple blouse", "http://www.fashionlady.in/wp-content/uploads/2016/09/Blouse-Design-Patterns.jpg"),
    new Recipe("Short", "This is one simple shourt", "http://ph-cdn1.ecosweb.com.br/Web/posthaus/foto/moda-feminina/shorts/short-cinza-feminino_122214_180_99.jpg"),
    new Recipe("Cueca", "Isso é upenas uma cueca lupos", "https://xtechfiles-us.s3.amazonaws.com/uploads/images/medium/05852d17d05b2c6e0178c9af114dffb8.jpg"),
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes;
  }
}
