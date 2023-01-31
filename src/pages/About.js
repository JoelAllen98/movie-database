import { Lightning, Utils, Router } from '@lightningjs/sdk';
import Box from '../components/Box.js';
import { getMovies, getMovieConfig, getSimilarMovies } from '../lib/api'

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
            Container: {
                rect: true,
                w: 1000,
                x: 960,
                y: 900,
                mount: 0.5,
                color: 0x00000000,
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
                  filmObject: 'Box0',
                },
                Box1: {
                  type: Box,
                  color: 0xffff0000,
                  filmObject: 'Box1',
                },
                Box2: {
                  type: Box,
                  color: 0xff0000ff,
                  filmObject: 'Box2',
                },
                Box3: {
                  type: Box,
                  color: 0xffff00ff,
                  filmObject: 'Box3',
                }
              },
            MovieData: {},
        };
    }

    pageTransition() {
        return 'left';
    }

 /*    _handleLeft() {
        Router.navigate('home');
    } */

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

    set params(data) {
        if (data.filmObject){
            this.tag('MovieTitle').text.text = data.filmObject.original_title;
            this.tag('ReleaseDate').text.text = data.filmObject.release_date;
            this.tag('Description').text.text = data.filmObject.overview;
            this.tag('MovieImage').src = `https://image.tmdb.org/t/p/w500${data.filmObject.poster_path}`;
            this.tag('MovieData').data = data.filmObject;
            console.log("setting")
            console.log(this.tag('MovieData'))
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

    async _enable() {
        this._setState('Box0');
        const config = await getMovieConfig();
        //console.log(config)
        //console.log(`${config.base_url}w500//t6HIqrRAclMCA60NsSmeqe9RmNV.jpg`)
        //src: Utils.asset(`${config.base_url}w500/${data[i].poster_path}`),
        console.log(this.tag('MovieData'));
        const dataNew = await getSimilarMovies(this.tag('MovieData').data.id);
        //console.log("app.js: ", data[0].original_title);
        for (let i = 0; i < dataNew.length; i++) {
            this.tag(`Box${i}`).patch({
                Image: {
                    src: `${config.base_url}w500/${dataNew[i].poster_path}`,
                  },
                Label: {
                    text: {
                      text: dataNew[i].original_title,
                    },
                  },
            })
            
        }
        console.log(dataNew);
      }

}
