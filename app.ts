import { msg } from "./something.js";
import { Button } from '@syncfusion/ej2-buttons';

// initialize button control
let button: Button = new Button();

// render initialized button
button.appendTo('#normalbtn');

//-------
const el = document.createElement('h1');
el.textContent = msg;
document.body.appendChild(el);
