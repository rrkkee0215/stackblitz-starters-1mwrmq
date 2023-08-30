import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PwPrototypeComponent } from './components/pw-prototype/pw-prototype.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PwPrototypeComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class PrototypeRoutingModule {}
