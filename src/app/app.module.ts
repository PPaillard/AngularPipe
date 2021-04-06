import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { TruncatatorPipe } from './common/truncatator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    TruncatatorPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
