import { TimerFormatterPipe } from './timer-formatter.pipe';

describe('TimerFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new TimerFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
