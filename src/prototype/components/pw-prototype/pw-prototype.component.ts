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
    {
      id: '640x360',
      value:
        'https://image.imnews.imbc.com/replay/2023/nwdesk/article/__icsFiles/afieldfile/2023/08/05/desk_20230805_201317_1_7_Large.jpg',
    },
    {
      id: '500x200',
      value:
        'https://img9.yna.co.kr/etc/inner/KR/2022/05/11/AKR20220511003300072_01_i_P2.jpg',
    },
    {
      id: '800x1731',
      value:
        'https://mblogthumb-phinf.pstatic.net/MjAxOTA3MjBfMjU4/MDAxNTYzNjAyMjY1MTM3.0fx5ORRlUPUQZSw1hTHAjtMh_U9tYLR_pYbkbxdu_4Eg.DzFeBSrL2m9m-ANpI7R4juTWA5nHTc324prWnJJKYwUg.JPEG.westar4501/%EC%96%B4%EC%A9%8C%EB%8B%A4_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_xr.jpg?type=w800',
    },
  ];
  testRatios = [
    { id: '꽉차게', value: 'fit' },
    { id: '80%', value: '80%' },
    { id: '90%', value: '90%' },
    { id: '100%', value: 'contain' },
  ];

  constructor() {}
}
