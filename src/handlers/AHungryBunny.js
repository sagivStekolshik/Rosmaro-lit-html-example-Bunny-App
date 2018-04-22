import {html} from 'lit-html/lib/lit-extended.js'

export default {

  giveTheCarrot: ({ctx}) => ({
    arrow: 'ate a carrot',
    ctx: {
      ...ctx,
      ateCarrots: 1
    }
  }),

  render: () => html`<p>
    <span role="img" aria-label="A hungry bunny">🐰</span> 
    This is a hungry bunny.
  </p>`

};