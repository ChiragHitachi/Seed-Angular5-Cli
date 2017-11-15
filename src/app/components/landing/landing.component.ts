import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { IResponse} from '../../models/viewModels';
import { ICommonService, IBroadcastService, } from '../../interfaces/interfaces';
import { responseStatus, messageType } from '../../models/enums';
import { Routes, Router } from '@angular/router';
import { UserService } from '../../services/userService';

@Component({
		selector: 'landing',
		templateUrl: './landing.component.html'
})

export class LandingComponent implements OnInit, OnDestroy{
		title: string;
		message: string;
		showError: boolean;
		welcomeMessage: string;
		customerLogo: string;
		ngOnDestroy() {
				var vm = this;
		}
		constructor( 
						@Inject('ICommonService') private commonService: ICommonService, private userService: UserService, 
						@Inject('IBroadcastService') private broadcastService: IBroadcastService,
						private router: Router) {
				var vm = this;
				vm.userService.getUsers().subscribe(result => {console.log("all", result)});			
				vm.userService.getUser(1).subscribe(result => {console.log("1", result)});			
				vm.userService.searchUser({name:'XYZ', id:0, dateOfJoin:null}).subscribe(result => {console.log("search", result)});			
				vm.userService.saveUser({name:'Abcd', id:4, dateOfJoin:new Date()}).subscribe(result => {console.log("save", result)});			
				
		}

		ngOnInit() {
				
		}

}
