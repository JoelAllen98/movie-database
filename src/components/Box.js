import { Lightning, Router, Utils } from '@lightningjs/sdk'

export default class Box extends Lightning.Component {
  static _template() {
      return {
        w: 200,
        h: 400,
        x: 0,
        y: 0,
        Highlight: {
          rect: true,
          w: 200,
          h: 300,
          mount: 0.5,
          x: 100,
          y: 150,
          color: 0xff000000,
        },
        Image: {
          rect: true,
          w: 200,
          h: 300,
          color: 0xffffffff,
          src: Utils.asset('images/logo.png'),
        },
        Label: {
          x: 100,
          y: 350,
          mount: 0.5,
          text: {
            text: 'Box',
            wordWrap: true,
            wordWrapWidth: 200,
            maxLines: 2,
            fontSize: 24,
            textColor: 0xff000000,
          },
        },
          
      }
  }

  _handleEnter() {
    console.log(this.boxName + ' has been selected');
    Router.navigate('about', { filmObject: this.filmObject });
  }

  _focus() {
    this.tag('Image').patch({
      color: 0xeeffffff,
      scale: 1.1,
    })
    this.tag('Highlight').patch({
      color: 0xffffffff,
      w: 240,
      h: 350,
    })
  }

  _unfocus() {
    this.tag('Image').patch({
      color: 0xffffffff,
      scale: 1,
    })
    this.tag('Highlight').patch({
      color: 0xff000000,
      w: 200,
      h: 300,
    })
  }

  _init() {
    this.tag('Label').patch({
      text: this.filmObject,
    })
    console.log(this.filmObject);
  }
}