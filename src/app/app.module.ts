import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BubbleSortComponent } from './algorithms/bubble-sort/bubble-sort.component';
import { LandingComponent } from './pages/landing/landing.component';
import { MergeSortComponent } from './algorithms/merge-sort/merge-sort.component';
import { QuickSortComponent } from './algorithms/quick-sort/quick-sort.component';
import { HeaderComponent } from './header/header.component';
import { HeapSortComponent } from './algorithms/heap-sort/heap-sort.component';
import { SelectionSortComponent } from './algorithms/selection-sort/selection-sort.component';
import { CountingSortComponent } from './algorithms/counting-sort/counting-sort.component';
import { RadixSortComponent } from './algorithms/radix-sort/radix-sort.component';
import { BucketSortComponent } from './algorithms/bucket-sort/bucket-sort.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BubbleSortComponent,
    LandingComponent,
    MergeSortComponent,
    QuickSortComponent,
    HeaderComponent,
    HeapSortComponent,
    SelectionSortComponent,
    CountingSortComponent,
    RadixSortComponent,
    BucketSortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
