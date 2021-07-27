import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = { idx: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState((previous, props) => {
      const lastIdx = props.pokemons.length - 1;
      let nextIdx = previous.idx + 1;
      if (nextIdx > lastIdx) nextIdx = 0;

      return { idx: nextIdx };
    });
  }

  render() {
    const { pokemons } = this.props;
    const pokemon = pokemons[this.state.idx];

    return (
      <div className="pokedex">
        <Pokemon key={pokemon.id} pokemon={pokemon} />
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}

export default Pokedex;
