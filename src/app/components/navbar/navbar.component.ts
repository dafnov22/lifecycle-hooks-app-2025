import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styles: `
    nav {
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;
    }
    .active {
      font-weight: bold;
      color: #341162;
    }
  `,
})
export class NavbarComponent {}
