import {html} from 'lit-html/lib/lit-extended.js'

export default {

  repeat: () => ({arrow: 'repeated'}),

  render: ({ctx, thisModel}) => html`<div>
    <p>Thanks, {ctx.name}!</p>
    <input
      type="button"
      value="One more time!"
      on-click=${() => thisModel.repeat()}
      />
  </div>`

};