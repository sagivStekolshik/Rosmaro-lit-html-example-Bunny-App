import {html} from 'lit-html/lib/lit-extended.js'

export default {

  typeName: ({ctx, name}) => ({
    arrow: 'typed',
    ctx: {...ctx, name}
  }),

  finishEnteringTheName: () => ({arrow: 'done'}),

  render: ({thisModel, ctx}) => html`<div>
    <p>Please, enter your name.</p>
    <input
      type="text"
      value={ctx.name}
      on-change=${ e => thisModel.typeName({name: e.target.value}) }
      />
    <input
      type="button"
      value="Done"
      on-click=${() => thisModel.finishEnteringTheName()}
      />
  </div>`

};