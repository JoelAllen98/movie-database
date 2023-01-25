/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Lightning, Utils } from '@lightningjs/sdk'
import Box from './components/Box.js';

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

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

  _init() {
    this._setState('Box0');
  }
}
