import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppSettingsComponent } from './app-settings.component';

const routes: Routes = [
  {
    path: 'apps-settings',
    component: AppSettingsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppSettingsModule {}
