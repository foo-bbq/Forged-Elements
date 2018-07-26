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
      { path: 'ironworks',
        component: SwelcomeComponent,
        children: [
          { path: 'welcome', component: SheroComponent },
          { path: 'shop', component: ShopComponent },
          { path: 'portfolio', component: SportfolioComponent },
          { path: 'about', component: SaboutComponent },
          { path: 'contact', component: CustomComponent },
          { path: '', redirectTo: 'welcome', pathMatch: 'full' }
        ]
      },
      { path: 'codesmith',
        component: CwelcomeComponent,
        children: [
          { path: 'welcome', component: CheroComponent },
          { path: 'portfolio', component: CportfolioComponent },
          { path: 'about', component: CaboutComponent },
          { path: 'services', component: ServicesComponent },
          { path: 'contact', component: ContactComponent },
          { path: '', redirectTo: 'about', pathMatch: 'full' }
        ]
      },
      { path: '', redirectTo: 'ironworks', pathMatch: 'full' },
      { path: '**', redirectTo: 'ironworks', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
