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
import { StopwatchDisplayComponent } from './components/stopwatch/stopwatch-display/stopwatch-display.component';
import { VanillaDirective } from './directives/vanilla.directive';
import { EmojiWorkoutComponent } from './emojis/emoji-workout/emoji-workout.component';
import { EmojiRestComponent } from './emojis/emoji-rest/emoji-rest.component';
import { RepeatsComponent } from './screens/repeats/repeats.component';
import { FullSetComponent } from './screens/full-set/full-set.component';
import { StopwatchInputComponent } from './components/stopwatch-input/stopwatch-input.component';
import { PadLeftPipe } from './pipes/pad-left.pipe';
import { EmojiGoComponent } from './emojis/emoji-go/emoji-go.component';
import { HttpClientModule } from '@angular/common/http';

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
    StepsComponent,
    StopwatchDisplayComponent,
    VanillaDirective,
    EmojiWorkoutComponent,
    EmojiRestComponent,
    RepeatsComponent,
    FullSetComponent,
    StopwatchInputComponent,
    PadLeftPipe,
    EmojiGoComponent
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
    MaterialComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
