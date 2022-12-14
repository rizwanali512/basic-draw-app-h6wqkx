import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { ShapeFormComponent } from './shape-form/shape-form.component';
import { ShapeService } from './shape.service';
import { ShapeTypeComponent } from './shape-type/shape-type.component';
import { RootComponent } from './root.component';

const appRoutes: Routes = [
  { path: 'shape/:id',      component: AppComponent },
  { path: '',
    redirectTo: '/shape/1',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ShapeFormComponent,
    CanvasComponent,
    ShapeTypeComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { /*enableTracing: true */ } // <-- debugging purposes only
    )
  ],
  providers: [ShapeService],
  bootstrap: [RootComponent]
})
export class AppModule { }
