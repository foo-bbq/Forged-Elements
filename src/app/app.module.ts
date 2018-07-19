import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SportfolioComponent } from './components/sportfolio/sportfolio.component';
import { ShopComponent } from './components/shop/shop.component';
import { SaboutComponent } from './components/sabout/sabout.component';
import { CaboutComponent } from './components/cabout/cabout.component';
import { CustomComponent } from './components/custom/custom.component';
import { ServicesComponent } from './components/services/services.component';
import { CportfolioComponent } from './components/cportfolio/cportfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { CwelcomeComponent } from './components/cwelcome/cwelcome.component';
import { SwelcomeComponent } from './components/swelcome/swelcome.component';
import { CheroComponent } from './components/chero/chero.component';
import { SheroComponent } from './components/shero/shero.component';

@NgModule({
  declarations: [
    AppComponent,
    SportfolioComponent,
    ShopComponent,
    SaboutComponent,
    CaboutComponent,
    CustomComponent,
    ServicesComponent,
    CportfolioComponent,
    ContactComponent,
    CwelcomeComponent,
    SwelcomeComponent,
    CheroComponent,
    SheroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'swelcome',
        component: SwelcomeComponent,
        children: [
          { path: 'shero', component: SheroComponent },
          { path: 'shop', component: ShopComponent },
          { path: 'sportfolio', component: SportfolioComponent },
          { path: 'sabout', component: SaboutComponent },
          { path: 'custom', component: CustomComponent },
          { path: '', redirectTo: 'shero', pathMatch: 'full' }
        ]
      },
      { path: 'cwelcome',
        component: CwelcomeComponent,
        children: [
          { path: 'chero', component: CheroComponent },
          { path: 'cportfolio', component: CportfolioComponent },
          { path: 'cabout', component: CaboutComponent },
          { path: 'services', component: ServicesComponent },
          { path: 'contact', component: ContactComponent },
          { path: '', redirectTo: 'chero', pathMatch: 'full' }
        ]
      },
      { path: '', redirectTo: 'swelcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'swelcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
