import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppContainerComponent } from './app-layouts/app-container/app-container.component';
import { AppInfoComponent } from './app-pages/app-info/app-info.components';
import { LogsComponent } from './app-pages/logs/logs.component';
import { EnvSetupComponent } from './app-pages/env-setup/env-setup.component';
import { AppSettingsComponent } from './app-pages/app-settings/app-settings.component';

const routes: Routes = [
  {
    path: 'apps',
    component: AppContainerComponent,
    children: [
      {
        path: 'info',
        component: AppInfoComponent,
      },
      {
        path: 'logs',
        component: LogsComponent,
      },
      {
        path: 'env',
        component: EnvSetupComponent,
      },
      {
        path: 'apps-settings',
        component: AppSettingsComponent,
      },
      {
        path: '**',
        redirectTo: 'info',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AppsModule {}
