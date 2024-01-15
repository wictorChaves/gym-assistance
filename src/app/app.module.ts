import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TestsComponent } from './screens/tests/tests.component';
import { RootComponent } from './screens/root/root.component';
import { PageNotFoundComponent } from './screens/page-not-found/page-not-found.component';
import { MaterialComponentsModule } from './modules/material-components/material-components.module';
import { TimerFormatterPipe } from './pipes/timer-formatter.pipe';
import { CountComponent } from './components/count/count.component';
import { StopwatchComponent } from './components/stopwatch/stopwatch.component';
import { SimpleComponent } from './screens/simple/simple.component';
import { StepsComponent } from './screens/steps/steps.component';

@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
    RootComponent,
    PageNotFoundComponent,
    TimerFormatterPipe,
    CountComponent,
    StopwatchComponent,
    SimpleComponent,
    StepsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    MaterialComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
