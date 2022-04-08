import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EnvSetupComponent } from './env-setup.component';

const routes: Routes = [
  {
    path: 'env',
    component: EnvSetupComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class EnvSetupModule {}
