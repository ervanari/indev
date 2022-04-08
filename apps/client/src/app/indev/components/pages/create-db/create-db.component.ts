import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Path {
  title: string;
  path: string;
  children?: any;
  icon: string;
}

@Component({
  selector: 'indev-create-db',
  templateUrl: './create-db.component.html',
  styleUrls: ['./create-db.component.scss'],
})
export class CreateDbComponent {
  constructor(private router: Router) {}

  paths: Path[] = [
    {
      title: 'PostgreSQL',
      path: 'indev/Create-PostgreSQL',
      icon: '../../../../../assets/postgre.png',
      children: [],
    },
    {
      title: 'MySQL',
      path: 'indev/Create-MySQL',
      icon: '../../../../../assets/mysql.png',
      children: [],
    },
    {
      title: 'Mongo',
      path: 'indev/Create-Mongo',
      icon: '../../../../../assets/mongo.png',
      children: [],
    },
    {
      title: 'Redis',
      path: 'indev/Create-Redis',
      icon: '../../../../../assets/redis.png',
      children: [],
    },
  ];

  /**
   * nav to path
   *
   *
   * @param path
   */
  toCreateDb(path: string) {
    console.log(path);
    this.router.navigate([]);
  }
}
