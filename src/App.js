import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
const update = require('immutability-helper');

class App extends Component {
  constructor(props) {
    super(props);

    this.saveOrder = this.saveOrder.bind(this);

    this.state = {
      cards: [
        {
          id: 1,
          text: 'Write a cool JS library',
        },
        {
          id: 2,
          text: 'Make it generic enough',
        },
        {
          id: 3,
          text: 'Write README',
        },
        {
          id: 4,
          text: 'Create some examples',
        },
        {
          id: 5,
          text:
            'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
        },
        {
          id: 6,
          text: '???',
        },
        {
          id: 7,
          text: 'PROFIT',
        },
      ],
    }
  }

  moveCard = (dragIndex, hoverIndex) => {
    const { cards } = this.state
    const dragCard = cards[dragIndex]

    this.setState(
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    )
  }
  
  saveOrder = (e) => {
    const cards = document.getElementById('cardContainer1').childNodes;
    cards.forEach((card, index) => {
      console.log(card.id," az ", index, " helyen van. A mentése megtörtént")
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <div id="cardContainer1" className="card-container">
            {this.state.cards.map((card, i) => (
              <Card
                key={card.id}
                index={i}
                id={card.id}
                text={card.text}
                moveCard={this.moveCard}
              />
            ))}
          </div>

          <button onClick={this.saveOrder}>sorrend mentése</button>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
