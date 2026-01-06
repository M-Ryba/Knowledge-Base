import { Component, signal } from '@angular/core';
import { TestComponent } from './components/test/test.component';
import { ResourceListComponent } from './features/resources/components/resource-list/resource-list.component';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [TestComponent, ResourceListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  protected readonly title = signal('projekt-frontend-development-ii');
}
