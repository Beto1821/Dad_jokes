import React from 'react';

class Joke extends React.Component {
  render() {
    const { jokeObj, saveJoke } = this.props;

    return (
      <div>
        <div class="position-relative py-2 px-4 text-bg-dark border border-dark rounded-pill"> {jokeObj.joke}</div>
        <button type="button" onClick={saveJoke} class="btn btn-success">
          Salvar piada!
        </button>
      </div>
    );
  }
}

export default Joke;