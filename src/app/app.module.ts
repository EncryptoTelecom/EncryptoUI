import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule} from 'ng2-charts';

import { EncryptoTel } from './modules/router.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/not-found/not-found.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    DashboardComponent,
    FooterComponent,
    PageNotFoundComponent,
    MainViewComponent,
    AddressBookComponent,
    MarketplaceComponent
  ],
  imports: [
    BrowserModule,
    EncryptoTel,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
