import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ApiService } from '../../../core/services/api.service';
import { Resource } from '../../../models/resource.model';
import { Observable } from 'rxjs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-resource-list',
  imports: [AsyncPipe, MatListModule, MatDividerModule],
  templateUrl: './resource-list.component.html',
  styleUrl: './resource-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourceListComponent {
  private readonly apiService = inject(ApiService);

  public readonly resources$: Observable<Resource[]> = this.apiService.getResources();
}
