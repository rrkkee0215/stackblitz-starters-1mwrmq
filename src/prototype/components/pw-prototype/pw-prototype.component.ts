import { Component } from '@angular/core';

const baseDeviceSize = {
  width: 375,
  height: 812,
};

@Component({
  selector: 'pw-prototype',
  templateUrl: './pw-prototype.component.html',
  styleUrls: ['./pw-prototype.component.css'],
})
export class PwPrototypeComponent {
  devices = {
    se: {
      width: 375,
      height: 667,
    },
    mini: {
      width: baseDeviceSize.width,
      height: baseDeviceSize.height,
    },
    zFlip: {
      width: 412,
      height: 1004,
    },
  };

  ratio = 'fit';
  image = '';
  coordinate = {
    x: 265,
    y: 140,
  };
  testImgs = [
    { id: '이미지 없음', value: '' },
    { id: '640x360', value: 'assets/images/prototype/640x360.jpeg' },
    { id: '500x200', value: 'assets/images/prototype/500x200.png' },
    { id: '800x1037', value: 'assets/images/prototype/800x1037.jpeg' },
    { id: '800x1731', value: 'assets/images/prototype/800x1731.jpeg' },
    { id: '738x1608', value: 'assets/images/prototype/738x1608.png' },
    { id: '910x3400', value: 'assets/images/prototype/910x3400.png' },
  ];
  testRatios = [
    { id: '꽉차게', value: 'fit' },
    { id: '80%', value: '80%' },
    { id: '90%', value: '90%' },
    { id: '100%', value: 'contain' },
  ];

  constructor() {}
}
