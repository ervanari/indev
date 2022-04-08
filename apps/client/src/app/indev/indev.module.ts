import { NgModule } from '@angular/core';
import { ContainerComponent } from './components/layouts/container/container.component';
import { BrowserModule } from '@angular/platform-browser';
import { ActivityComponent } from './components/pages/activity/activity.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SettingsModule } from './components/pages/settings/settings.module';
import { MatricsComponent } from './components/pages/matrics/matrics.component';
import { IndevRoutingModule } from './indev-routing.module';
import { SharedModule } from './shared/shared.module';
import { CreateDbComponent } from './components/pages/create-db/create-db.component';
import { CreateAppsGitlabComponent } from './components/pages/create-apps-gitlab/create-apps-gitlab.component';
import { CreateAppComponent } from './components/pages/create-app/create-app.component';
import { NabBarAppComponent } from './components/apps/app-layouts/nab-bar-app/nab-bar-app.component';
import { AppInfoComponent } from './components/apps/app-pages/app-info/app-info.component';
import { LogsComponent } from './components/apps/app-pages/logs/logs.component';
import { EnvSetupComponent } from './components/apps/app-pages/env-setup/env-setup.component';
import { AppSettingsComponent } from './components/apps/app-pages/app-settings/app-settings.component';
import { AppContainerComponent } from './components/apps/app-layouts/app-container/app-container.component';
import { AppsModule } from './components/apps/apps.module';

@NgModule({
  declarations: [
    ContainerComponent,
    ActivityComponent,
    MatricsComponent,
    SettingsComponent,
    CreateDbComponent,
    CreateAppsGitlabComponent,
    CreateAppComponent,
    NabBarAppComponent,
    AppInfoComponent,
    LogsComponent,
    EnvSetupComponent,
    AppSettingsComponent,
    AppContainerComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SettingsModule,
    SharedModule,
    IndevRoutingModule,
    AppsModule,
  ],
  exports: [],
})
export class IndevModule {}
