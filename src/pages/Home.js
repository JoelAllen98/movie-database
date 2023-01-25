import { Lightning, Utils, Router } from '@lightningjs/sdk';
import Box from '../components/Box.js';

export class Home extends Lightning.Component {
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
              text: "Movies",
              fontFace: 'Regular',
              fontSize: 64,
              textColor: 0xbbffffff,
            },
          },
          Container: {
            rect: true,
            w: 1000,
            x: 960,
            y: 540,
            mount: 0.5,
            color: 0xff808080,
            flex: {
              direction: 'row',
              wrap: true,
              justifyContent: 'space-evenly',
              alignContent: 'center',
              padding: 20,
            },
            Box0: {
              type: Box,
              color: 0xff00ff00,
              filmName: 'Box0',
            },
            Box1: {
              type: Box,
              color: 0xffff0000,
              filmName: 'Box1',
            },
            Box2: {
              type: Box,
              color: 0xff0000ff,
              filmName: 'Box2',
            },
            Box3: {
              type: Box,
              color: 0xffff00ff,
              filmName: 'Box3',
            }
          }
        }
      }
    
      _handleLeft() {
        let index = parseInt(this._getState().slice(-1));
        if (index > 0){
          this._setState(`Box${index - 1}`);
        }
      }
    
      _handleRight() {
        let index = parseInt(this._getState().slice(-1));
        if (index < 3){
          this._setState(`Box${index + 1}`);
        }
      }
    
      static _states() {
        return [
          class Box0 extends this {
            _getFocused(){
              return this.tag('Box0');
            }
          },
          class Box1 extends this {
            _getFocused(){
              return this.tag('Box1');
            }
          },
          class Box2 extends this {
            _getFocused(){
              return this.tag('Box2');
            }
          },
          class Box3 extends this {
            _getFocused(){
              return this.tag('Box3');
            }
          },
        ]
      }
      
      pageTransition() {
        return 'right';
    }

      _init() {
        this._setState('Box0');
      }
}
