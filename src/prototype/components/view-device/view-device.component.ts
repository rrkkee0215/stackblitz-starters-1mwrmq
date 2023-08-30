import { Component, Input } from '@angular/core';

const baseHeaderSize = 40;

const overlayRatio = {
  width: 1,
  height: 2,
};

const bodyRatio = {
  width: 6,
  height: 13,
};

const baseDeviceSize = {
  width: 375,
  height: 812,
};

@Component({
  selector: 'wf-view-device',
  templateUrl: './view-device.component.html',
  styleUrls: ['./view-device.component.css'],
})
export class ViewDeviceComponent {
  @Input()
  name = '';
  @Input()
  resolution: { width: number; height: number } = {
    width: 0,
    height: 0,
  };
  @Input()
  coordinate: { x: number; y: number } = {
    x: 0,
    y: 0,
  };
  @Input()
  image = '';
  @Input()
  ratio = 'fit';

  get headerHeight(): number {
    return (this.bodySize.width * baseHeaderSize) / baseDeviceSize.width;
  }

  get overlayHeight(): number {
    const overlayHeightFromWidth =
      (this.bodySize.width * overlayRatio.height) / overlayRatio.width;

    if (overlayHeightFromWidth > this.bodySize.height - this.headerHeight) {
      return (
        ((this.bodySize.height - this.headerHeight) * overlayRatio.width) /
        overlayRatio.height
      );
    }

    return overlayHeightFromWidth;
  }

  get bodySize(): { width: number; height: number } {
    const bodyHeight =
      (this.resolution.width * bodyRatio.height) / bodyRatio.width;
    const bodyWidth =
      (this.resolution.height * bodyRatio.width) / bodyRatio.height;

    return bodyHeight > this.resolution.height
      ? { width: bodyWidth, height: this.resolution.height }
      : { width: this.resolution.width, height: bodyHeight };
  }

  get circlePosition(): { y: number; x: number } {
    return {
      y:
        (this.coordinate.y * (this.bodySize.height - this.headerHeight)) /
        baseDeviceSize.height,
      x: (this.coordinate.x * this.bodySize.width) / baseDeviceSize.width,
    };
  }
}
