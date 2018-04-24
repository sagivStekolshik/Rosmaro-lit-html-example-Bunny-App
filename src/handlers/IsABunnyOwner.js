import {html} from 'lit-html/lib/lit-extended.js'

export default {

  hasABunny: () => ({arrow: 'has a bunny'}),

  hasNoBunny: () => ({arrow: 'has no bunny'}),

  view: ({thisModel}) => html`<div>
    <p>Do you have a bunny?</p>
    <input
      type="button"
      value="Yes, I have a bunny!"
      on-click=${() => thisModel.hasABunny()}
      />
    <input
      type="button"
      value="No, I don't have a bunny."
      on-click=${() => thisModel.hasNoBunny()}
      />
  </div>`

};