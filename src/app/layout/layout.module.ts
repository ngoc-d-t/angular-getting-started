import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './public/top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
})
export class LayoutModule {}
