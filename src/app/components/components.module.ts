import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { SocialShareComponent } from './social-share/social-share.component';

const components = [
  SocialShareComponent
];

@NgModule({
  imports: [
    IonicModule
  ],
  declarations: components,
  exports: components
})
export class ComponentsModule { }
