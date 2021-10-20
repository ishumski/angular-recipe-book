import { Component, EventEmitter, Output } from '@angular/core'
import { Recipe } from '../../shared/recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipesListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe(
      'Buritto',
      'The best food ever',
      'http://stage.santamaria.episerverhosting.com/optimized/recipe-large/globalassets/_recipes/tex-mex/burrito.jpg'
    ),
    new Recipe(
      'Pizza',
      'For the best mafiozi',
      'https://image.shutterstock.com/z/stock-vector-italian-pizza-recipe-pepperoni-pizza-cooking-pizza-with-ingredients-410460208.jpg'
    )
  ]

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
    console.log(recipe)
  }

  constructor() {}
}
