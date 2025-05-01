import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'token';
  private isBrowser: boolean;
  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    // Initialisation du BehaviorSubject avec l'état d'authentification initial
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  }

  login(username: string, password: string): boolean {
    // Ici, vous devriez implémenter une véritable logique d'authentification
    // Ceci est juste un exemple simpliste pour démonstration
    if (username === 'admin' && password === 'password') {
      if (this.isBrowser) {
        localStorage.setItem(this.tokenKey, 'fake-jwt-token');
      }
      this.isAuthenticatedSubject.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    if (this.isBrowser) {
      localStorage.removeItem(this.tokenKey);
    }
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  getCurrentAuthState(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  private hasToken(): boolean {
    if (!this.isBrowser) {
      return false;
    }
    return !!localStorage.getItem(this.tokenKey);
  }
}