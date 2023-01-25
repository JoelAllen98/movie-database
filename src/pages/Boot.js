import { Lightning, Utils, Router } from '@lightningjs/sdk';

export class Boot extends Lightning.Component {
    static _template() {
        return {
            Background: {
                w: 1920,
                h: 1080,
                rect: true,
                color: 0xffbb7722
            },
            Title: {
                x: 960,
                y: 50,
                mount: 0.5,
                text: {
                    text: 'Hello World',
                    fontSize: 64
                }
            },
            Logo: {
                x: 960,
                y: 540,
                mount: 0.5,
                src: Utils.asset('images/logo.png'),
            },
            Label: {
                x: 960,
                y: 800,
                mount: 0.5,
                text: {
                    text: 'Press ENTER to continue',
                    fontSize: 32
                }
            }
        };
    }

    _handleEnter() {
        Router.navigate('home');
    }
}
