import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedPath: string = ''

  onSelectedByPath(feature: string) {
    this.loadedPath = feature
  }
}
