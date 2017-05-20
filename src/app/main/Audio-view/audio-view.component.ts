import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  template: `
    <h2>CRISIS CENTER</h2>
    <p>Get your crisis here</p>`
})

export class AudioComponent  implements OnInit{
	ngOnInit(){
		console.log('audio component initiated');
	}
}