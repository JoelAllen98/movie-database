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
    Router.navigate('about');
  }

  _focus() {
    this.tag('Image').patch({
      color: 0xeeffffff,
      scale: 1.1,
    })
    this.tag('Highlight').patch({
      color: 0xffffffff,
      //w: 240,
      //h: 350,
    })
    this.selectedPulse.start();
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
    this.selectedPulse.stop();
  }

  _init() {
    this.tag('Label').patch({
      text: this.filmObject,
    })
    this.selectedPulse = this.tag('Highlight').animation({
      duration: 2,
      repeat: -1,
      stopMethod: 'immediate',
      autostop: false,
      actions: [
        { p: 'scale', v: { 0: 1.00, 0.25: 1.2, 0.5: 1.00, 0.75: 1.2, 1: 1.00 } }
      ]
    });
  }
}