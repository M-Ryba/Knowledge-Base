import { Component, signal } from '@angular/core';
import { TestComponent } from "./components/test/test.component";
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [TestComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  protected readonly title = signal('projekt-frontend-development-ii');
}
