import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from "./pages/landing/landing.component";
import {BubbleSortComponent} from "./algorithms/bubble-sort/bubble-sort.component";
import {MergeSortComponent} from "./algorithms/merge-sort/merge-sort.component";
import {QuickSortComponent} from "./algorithms/quick-sort/quick-sort.component";
import {BucketSortComponent} from "./algorithms/bucket-sort/bucket-sort.component";
import {CountingSortComponent} from "./algorithms/counting-sort/counting-sort.component";
import {HeapSortComponent} from "./algorithms/heap-sort/heap-sort.component";
import {RadixSortComponent} from "./algorithms/radix-sort/radix-sort.component";
import {SelectionSortComponent} from "./algorithms/selection-sort/selection-sort.component";


const routes: Routes = [
    {path: 'home', component: LandingComponent},
    {path: 'algorithm/bubble-sort', component: BubbleSortComponent},
    {path: 'algorithm/bucket-sort', component: BucketSortComponent},
    {path: 'algorithm/counting-sort', component: CountingSortComponent},
    {path: 'algorithm/heap-sort', component: HeapSortComponent},
    {path: 'algorithm/merge-sort', component: MergeSortComponent},
    {path: 'algorithm/quick-sort', component: QuickSortComponent},
    {path: 'algorithm/radix-sort', component: RadixSortComponent},
    {path: 'algorithm/selection-sort', component: SelectionSortComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
