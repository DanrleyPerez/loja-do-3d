import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenubarModule} from 'primeng/menubar';
import {DataViewModule} from 'primeng/dataview';


import { HeaderComponent } from './template/header/header.component';
import { ProductsComponent } from './views/products/products.component';
import { BodyComponent } from './body/body.component';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } 
    from "@angular/platform-browser/animations";
  

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    MenubarModule,
    DataViewModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule
    
    
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
