import { Lightning, Utils, Router } from '@lightningjs/sdk';

export class About extends Lightning.Component {
    static _template() {
        return {
            Background: {
                w: 1920,
                h: 1080,
                src: Utils.asset('images/background3.png'),
              },
              Title: {
                mount: 0,
                x: 50,
                y: 50,
                text: {
                  text: "Extra info",
                  fontFace: 'Regular',
                  fontSize: 64,
                  textColor: 0xbbffffff,
                },
              },
            Info: {
                x: 960,
                y: 450,
                mount: 0.5,
                text: {
                    text: 'Here is some info about the page',
                    fontSize: 32
                }
            },
        };
    }

    pageTransition() {
        return 'left';
    }

    _handleLeft() {
        Router.navigate('home');
    }

    set params(data) {
        if (data.message){
            this.tag('Info').text.text = data.message;
        }
    }
}
