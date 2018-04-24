import {html} from 'lit-html/lib/lit-extended.js'

export default {

  lookForACarrot: () => ({arrow: 'found a carrot'}),

  view: ({thisModel}) => html`<div>
    <p>You don't have a carrot to give to your bunny.</p>
    <input
      type="button"
      value="Look for a carrot"
      on-click=${() => thisModel.lookForACarrot()}
      />
  </div>`

};