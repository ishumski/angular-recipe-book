import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core'
import { Ingredients } from 'src/app/shared/ingredients.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef!: ElementRef
  @ViewChild('amountInput') amountInputRef!: ElementRef
  @Output() passedIngredients = new EventEmitter<{
    name: string
    amount: number
  }>()

  constructor() {}

  onAddedItem() {
    const ingName = this.nameInputRef.nativeElement.value
    const ingAmount = this.amountInputRef.nativeElement.value
    const newIngredient = new Ingredients(ingName, ingAmount)
    this.passedIngredients.emit(newIngredient)
  }

  ngOnInit(): void {}
}
