import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, Observable, catchError, throwError } from 'rxjs';
import { AuthResponse, LoginCredentials, RegisterCredentials, User } from './auth.model';
import { environment } from '../../../environments/environment';
import { ErrorHandlerService } from '../services/error-handler.service';

// local storage item key names
const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly errorHandler = inject(ErrorHandlerService);

  private readonly apiUrl = environment.apiUrl;

  private readonly currentUserSignal = signal<User | null>(this.loadUserFromStorage());
  private readonly tokenSignal = signal<string | null>(this.loadTokenFromStorage());

  public readonly currentUser = this.currentUserSignal.asReadonly();
  public readonly isAuthenticated = computed(() => !!this.tokenSignal());

  public login(credentials: LoginCredentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap((response) => this.handleAuthResponse(response)),
      catchError((err: unknown) => {
        const message = this.errorHandler.getErrorMessage(err, 'Failed to login');

        return throwError(() => new Error(message));
      }),
    );
  }

  public register(credentials: RegisterCredentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, credentials).pipe(
      tap((response) => this.handleAuthResponse(response)),
      catchError((err: unknown) => {
        const message = this.errorHandler.getErrorMessage(err, 'Failed to register');

        return throwError(() => new Error(message));
      }),
    );
  }

  public logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this.tokenSignal.set(null);
    this.currentUserSignal.set(null);
  }

  public getToken(): string | null {
    return this.tokenSignal();
  }

  private handleAuthResponse(response: AuthResponse): void {
    localStorage.setItem(TOKEN_KEY, response.accessToken);
    localStorage.setItem(USER_KEY, JSON.stringify(response.user));
    this.tokenSignal.set(response.accessToken);
    this.currentUserSignal.set(response.user);
  }

  private loadTokenFromStorage(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  private loadUserFromStorage(): User | null {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) {
      try {
        return JSON.parse(userJson) as User;
      } catch {
        return null;
      }
    }

    return null;
  }
}
