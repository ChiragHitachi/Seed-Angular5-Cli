import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { Component3Component } from '../components/component3/component3.component';


const routes: Routes = [
		{
				path: '',
				component: Component3Component,
		}
];

export const Component3AppRouting: ModuleWithProviders = RouterModule.forChild(routes);
