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
            MovieImage: {
                rect: true,
                w: 300,
                h: 450,
                x: 200,
                y: 200,
                color: 0xffffffff,
              },
            MovieTitle: {
                x: 600,
                y: 200,
                text: {
                    text: 'Generic Action Movie 7',
                    fontSize: 64,
                }
            },
            ReleaseDate: {
                x: 600,
                y: 300,
                w: 100,
                h: 50,
                text: {
                    text: "11/06/2017",
                    fontSize: 18,
                },
            },

            Description: {
                x: 600,
                y: 350,
                w: 600,
                h: 450,
                text: {
                    text: "Big, strong, bald man drives cars above the speed limit and causes dozens of casualties with lots of explosions. The seventh instalment of the franchise goes bigger, faster and more explosiony than ever before. The plot is as thin as the plot of the previous six films, but the action is bigger and better. The film is a must-see for fans of the franchise, but it's not for everyone. Why not try watching a film with a plot instead?",
                    fontSize: 24,
                },
                flex: {
                    direction: 'column',
                    wrap: true,
                    justifyContent: 'space-evenly',
                    alignContent: 'center',
                    padding: 20,
                  },
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
