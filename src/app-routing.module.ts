import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('./prototype/prototype.module').then((m) => m.PrototypeModule),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
