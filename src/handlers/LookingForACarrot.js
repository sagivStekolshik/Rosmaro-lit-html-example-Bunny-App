import {html} from 'lit-html/lib/lit-extended.js'

export default {

  lookForACarrot: () => ({arrow: 'found a carrot'}),

  render: ({thisModel}) => html`<div>
    <p>You don't have a carrot to give to your bunny.</p>
    <input
      type="button"
      value="Look for a carrot"
      on-click=${() => thisModel.lookForACarrot()}
      />
  </div>`

};