import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ErrorHandlerService {
  public getErrorMessage(error: unknown, fallback: string = 'Unknown error occured'): string {
    if (!(error instanceof HttpErrorResponse)) {
      return fallback;
    }

    // Network error
    if (error.status === 0) {
      return 'Unable to connect to server';
    }

    // Backend returned a string
    if (typeof error.error === 'string') {
      return error.error;
    }

    return fallback;
  }
}
