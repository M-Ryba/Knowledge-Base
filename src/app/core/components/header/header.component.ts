import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly router = inject(Router);

  private readonly authService = inject(AuthService);
  public readonly userName = computed(() => this.authService.currentUser()?.name ?? null);

  public onLogout(): void {
    this.authService.logout();
    void this.router.navigate(['/login']);
  }
}
