import { html } from 'lit-html/lib/lit-extended.js'

export default {

  giveTheCarrot: ({ ctx }) => ({
    arrow: 'ate a carrot',
    ctx: Object.assign({}, ctx, { ateCarrots: 1 })
  }),

  view: () => html`<p>
  <span role="img" aria-label="A hungry bunny">🐰</span>
  This is a hungry bunny.
</p>`

};