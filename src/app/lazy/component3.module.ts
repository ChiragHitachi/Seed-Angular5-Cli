import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Component3Component } from '../components/component3/component3.component';

import { Component3AppRouting } from './Component3.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
		// directives, components, and pipes
		declarations: [
				Component3Component,
		],
		// modules
		imports: [

				Component3AppRouting,
				CommonModule,
				//ChartModule,
				//ChartModule.forRoot(require('highcharts'))  // <-- HERE
		],
		//providers: [{
		//    provide: HighchartsStatic,
		//    useFactory: highchartsFactory
		//}],

})
export class component3AppModule { }


