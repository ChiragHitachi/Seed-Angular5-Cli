import { Component, Inject } from '@angular/core';
import { IResponse } from '../../models/viewModels';
import { responseStatus } from '../../models/enums';

@Component({
		selector: 'app-comp3',
		templateUrl: './component3.component.html'
})

export class Component3Component {
		title: string;

		constructor() {
				var vm = this;
		}

		ngOnInit() {

		}
}
