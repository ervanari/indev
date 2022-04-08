import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Path {
  title: string;
  path: string;
  children?: any;
  icon: string;
}

@Component({
  selector: 'indev-nab-bar-app',
  templateUrl: './nab-bar-app.component.html',
  styleUrls: ['./nab-bar-app.component.scss'],
})
export class NabBarAppComponent {
  paths: Path[] = [
    {
      title: 'App',
      path: 'apps/info',
      icon: 'fa fa-crop',
      children: [],
    },
    {
      title: 'Logs',
      path: 'apps/logs',
      icon: 'fa fa-apple',
      children: [],
    },
    {
      title: 'Env Setup',
      path: 'apps/env',
      icon: 'fa fa-file',
      children: [],
    },
    {
      title: 'Settings',
      path: 'apps/apps-settings',
      icon: 'fa fa-list',
      children: [],
    },
  ];
  constructor(private router: Router) {}

  /**
   * nav to path
   *
   *
   * @param path
   */
  nav(path: string) {
    console.log(path);
    this.router.navigate(['' + path + '']);
  }
}
