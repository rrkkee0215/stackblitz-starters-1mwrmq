import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwPrototypeComponent } from './components/pw-prototype/pw-prototype.component';
import { ViewDeviceComponent } from './components/view-device/view-device.component';
import { PrototypeRoutingModule } from './prototype-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, PrototypeRoutingModule, FormsModule],
  declarations: [PwPrototypeComponent, ViewDeviceComponent],
})
export class PrototypeModule {}
