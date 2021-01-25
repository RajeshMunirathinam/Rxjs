import { Observable } from "rxjs/Observable";
import * as Rx from "rxjs/Rx";
import { fromEvent } from 'rxjs';

setTimeout(() => {
	afterDOMInit();
}, 2000);

function afterDOMInit() {
   var clickMeBtn = document.querySelector('#clickMe');
   var typeInput = document.querySelector('#typeInput');
   var info = document.querySelector('.info');
   
	fromEvent(clickMeBtn, 'click').subscribe(() => {
      console.log('');
   });
}

