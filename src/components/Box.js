import { Lightning } from '@lightningjs/sdk'

export default class Box extends Lightning.Component {
  static _template() {
      return {
        w: 200,
        h: 400,
        x: 0,
        y: 0,
        Image: {
          rect: true,
          w: 200,
          h: 300,
          color: 0xffffffff,
        },
        Label: {
          x: 100,
          y: 350,
          mount: 0.5,
          text: {
            text: 'Box',
            fontSize: 24,
            textColor: 0xff000000,
          },
        },
      }
  }

  _handleEnter() {
    console.log(this.boxName + ' has been selected');
  }

  _focus() {
    this.tag('Image').patch({
      color: 0xff0000ff,
    })
  }

  _unfocus() {
    this.tag('Image').patch({
      color: 0xffffffff,
    })
  }

  _init() {
    this.tag('Label').patch({
      text: this.filmName,
    })
  }
}