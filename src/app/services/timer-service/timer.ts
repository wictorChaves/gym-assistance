import { Observable, Subject, Subscription, interval, startWith } from 'rxjs';

export class Timer {

    private stopwatcher: Subject<number> = new Subject();
    private timerReference: Subscription | undefined;

    private startTime: number = 0;
    private internalstopwatcher: number = 0;

    constructor() {
        this.initialValues();
        this.stopwatcher.subscribe(stopwatcher => {
            this.internalstopwatcher = stopwatcher;
        });
    }

    protected initialValues() {
        this.stopwatcher.pipe(startWith(0));
    }

    start() {
        this.stopwatcher.next(0);
        this.resume();
    }

    resume() {
        this.startTime = Date.now() - this.internalstopwatcher;
        this.stopwatcherStart();
    }

    pause() {
        this.stopwatcherStop();
    }

    stop() {
        this.stopwatcherStop();
        this.stopwatcher.next(0);
    }

    listerStopwatcher(): Observable<number> {
        return this.stopwatcher;
    }

    private stopwatcherStop() {
        this.timerReference?.unsubscribe();
    }

    private stopwatcherStart() {
        this.timerReference = interval(1).subscribe(() => {
            this.stopwatcher.next(Date.now() - this.startTime);
        });
    }

}
