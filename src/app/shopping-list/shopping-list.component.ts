import { Component, OnInit } from '@angular/core'
import { Ingredients } from './ingredients.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Mushrooms', 10),
    new Ingredients('Sex on the Beach', 100)
  ]

  constructor() {}

  ngOnInit(): void {}
}
