import {html} from 'lit-html/lib/lit-extended.js'

export default {

  go: () => ({arrow: 'fed the bunny'}),

  render: ({thisModel}) => html`<div>
    <p>
      <span role="img" aria-label="A full bunny">🐰</span> 
      <span role="img" aria-label="Fireworks">🎆</span>
      The bunny is full. You can go.
    </p>
    <input
      type="button"
      value="Go!"
      on-click=${() => thisModel.go()}
      />
  </div>`

};