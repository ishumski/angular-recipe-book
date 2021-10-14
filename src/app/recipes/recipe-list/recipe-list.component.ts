import { Component } from '@angular/core'
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Buritto',
      'The best food ever',
      'http://stage.santamaria.episerverhosting.com/optimized/recipe-large/globalassets/_recipes/tex-mex/burrito.jpg'
    )
  ]
  constructor() {}
}
