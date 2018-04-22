import {html} from 'lit-html/lib/lit-extended.js'

export default {

  afterRender: ({res}) => html`<div>
    ${res.TheBunny}
    <hr/>
    ${res.CarrotControls}
  </div>`

};