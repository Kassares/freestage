import React, { Component } from 'react';
import Masonry from './Masonry.jsx';

let brakePoints = [
  250,
  500,
  750,
  900,
  1200
];
let images = [];
const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92,643, 830, 210, 200];
for(let i = 0; i< imgId.length; i++){
	const ih = 200 + Math.floor(Math.random()*10)*15;
	images.push("https://unsplash.it/250/" + 250 + "?image=" + imgId[i]);
// 	images.push("https://cs4.pikabu.ru/post_img/2015/06/27/6/1435397110_577794048.png");
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // elements: [
      // ],
    };
  };
  
  render() {
    const Tile = ({src}) => {
      return (
        <div className="tile">
          
			    <img src={src} />
			    <span className="item-title">BAND-NAME</span>
			    <span className="item-description">Жанр: Рок</span>
		    
		    </div>
      );
    };
    return (
        <div className="homepage">
            <Masonry brakePoints={brakePoints}>
						  {images.map((image, id) => {
							  return (
								  <Tile key={id} src={image} />
							  ) 
						  })}
					</Masonry>
        </div>
    );
  }
}
