import {html} from 'lit-html/lib/lit-extended.js'

export default {

  giveTheCarrot: () => ({arrow: 'gave the carrot'}),

  view: ({thisModel}) => html`<div>
    <p>You have a carrot. You can give it to your bunny.</p>
    <input
      type="button"
      value="Give the carrot"
      on-click=${() => thisModel.giveTheCarrot()}
      />
  </div>`

};