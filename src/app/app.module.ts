import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConvertToSpacesPipe,
    StarComponent,
    SportfolioComponent,
    ShopComponent,
    SaboutComponent,
    CaboutComponent,
    CustomComponent,
    ServicesComponent,
    CportfolioComponent,
    ContactComponent,
    CwelcomeComponent,
    SwelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'shop', component: ShopComponent },
      { path: 'sportfolio', component: SportfolioComponent },
      { path: 'sabout', component: SaboutComponent },
      { path: 'custom', component: CustomComponent },
      { path: 'cportfolio', component: CportfolioComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
