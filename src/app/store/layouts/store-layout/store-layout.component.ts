import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-store-layout',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './store-layout.component.html',
})
export class StoreLayoutComponent {}
