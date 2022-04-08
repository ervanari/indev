import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Path {
  project: string;
  path: string;
  time: string;
  icon: string;
}

@Component({
  selector: 'indev-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}
  paths: Path[] = [
    {
      project: 'Simpool',
      path: 'indev/home',
      icon: '../../../../../assets/github.png',
      time: '31 minutes ago',
    },
    {
      project: 'Quiz',
      path: 'indev/activity',
      icon: '../../../../../assets/dokku.png',
      time: '31 minutes ago',
    },
    {
      project: 'Transaksiku',
      path: 'indev/matrics',
      icon: '../../../../../assets/gitlab.png',
      time: '31 minutes ago',
    },
    {
      project: 'Local Transfer',
      path: 'indev/matrics',
      icon: '../../../../../assets/docker.png',
      time: '31 minutes ago',
    },
  ];

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

  toCreateApps() {
    this.router.navigate(['indev/create-app']);
  }
  toCreateDbApps() {
    this.router.navigate(['indev/create-db']);
  }
  toApps(path: string) {
    this.router.navigate(['apps/apps-info']);
  }
}
