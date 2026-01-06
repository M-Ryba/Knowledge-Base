import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ApiService } from '../../../../core/services/api.service';
import { Resource } from '../../../../core/models/resource.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resource-list',
  imports: [AsyncPipe],
  templateUrl: './resource-list.component.html',
  styleUrl: './resource-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourceListComponent {
  private readonly apiService = inject(ApiService);

  public readonly resources$: Observable<Resource[]> = this.apiService.getResources();
}
