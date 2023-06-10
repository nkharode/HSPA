import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { propertycardcomponent } from './property/property-card/property-card.component';
import { PropertylistComponent } from './property/propertylist/propertylist.component'; 
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [		
    AppComponent,
    propertycardcomponent,
    PropertylistComponent,
      NavbarComponent
   ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
