import { Routes } from '@angular/router';
import { NgbdAccordionBasicComponent } from './accordion/accordion.component';
import { VisaComponent } from './visa/visa.component';
import { CardsComponent } from './card/card.component';
import { ArtcicleComponent } from './artcicle/artcicle.component';
import { AboutComponent } from './about/about.component';
import { ViewyoutubeComponent } from './viewyoutube/viewyoutube.component';
import { CenterUiComponent } from './center-ui/center-ui.component';

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'Pornatis update ui',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'update ui' }
          ]
        }
      },
      {
        path: 'accordion',
        component: NgbdAccordionBasicComponent,
        data: {
          title: 'Recommended for you',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Recommended for you' }
          ]
        }
      },
      {
        path: 'visa',
        component: VisaComponent,
        data: {
          title: 'Visa Application',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Visa Application' }
          ]
        }
      },
      {
        path: 'artcicle',
        component: ArtcicleComponent,
        data: {
          title: 'Review',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Review' }
          ]
        }
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'About' }
          ]
        }
      },
      {
        path: 'viewyoutube',
        component: ViewyoutubeComponent,
        data: {
          title: 'Youtube',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Youtube' }
          ]
        }
      },
      {
        path: 'centerui',
        component: CenterUiComponent,
        data: {
          title: 'Center-ui',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Center-ui' }
          ]
        }
      }
    ]
  }
];
