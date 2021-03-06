import { NgModule, ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteLoaderConfig, InfiniteLoaderComponent } from "./index";

@NgModule({
    imports: [ CommonModule ],
    declarations: [ InfiniteLoaderComponent ],
    exports: [ InfiniteLoaderComponent ],
    entryComponents: [ InfiniteLoaderComponent ]
})
export class InfiniteLoaderModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: InfiniteLoaderModule, providers: [ InfiniteLoaderConfig ] };
    }
}
