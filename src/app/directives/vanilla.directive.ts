import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appVanilla]'
})
export class VanillaDirective {

  @Output() public rightSwipe: EventEmitter<void> = new EventEmitter<void>();
  @Output() public leftSwipe: EventEmitter<void> = new EventEmitter<void>();
  @Output() public downSwipe: EventEmitter<void> = new EventEmitter<void>();
  @Output() public upSwipe: EventEmitter<void> = new EventEmitter<void>();

  private xDown: number | null = null;
  private yDown: number | null = null;

  @HostListener('touchstart', ['$event'])
  public onTouchstart(event: TouchEvent): void {
    const firstTouch = this.getTouches(event)[0];
    this.xDown = firstTouch.clientX;
    this.yDown = firstTouch.clientY;
  }

  getTouches(event: TouchEvent) {
    return this.getTouchesBrowserAPI(event);
  }

  @HostListener('touchmove', ['$event'])
  public onTouchmove(event: TouchEvent): void {
    if (!this.xDown || !this.yDown) {
      return;
    }

    var xUp = event.touches[0].clientX;
    var yUp = event.touches[0].clientY;

    var xDiff = this.xDown - xUp;
    var yDiff = this.yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        this.rightSwipe.emit();
      } else {
        this.leftSwipe.emit();
      }
    } else {
      if (yDiff > 0) {
        this.downSwipe.emit();
      } else {
        this.upSwipe.emit();
      }
    }

    this.resetValues();
  }

  getTouchesBrowserAPI(event: TouchEvent) {
    return event.touches;
  }

  resetValues() {
    this.xDown = null;
    this.yDown = null;
  }

}
