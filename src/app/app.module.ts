import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'rxjs/Rx';
import { AppParams } from './config/config';

import { TRANSLATION_PROVIDERS } from './config/translations';

import { AppRouting } from './app.routing';
import { WebRequest } from './services/web.request';
import { LoginService } from './services/login.service';
import { BroadcastService } from './services/broadcast.service';
import { StorageService } from './services/storage.service';
import { CommonService } from './services/common.service';
import { TranslateService } from './services/translate.service';

import { TranslatePipe } from './pipes/translatePipe';
import { FormatDate } from './pipes/format-date.pipe';

import { AppComponent } from './components/app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { Component2Component } from './components/component2/component2.component';
import { SecurityGuard } from './config/SecurityGuard';
import { RoutingService } from "./services/routing.service";
import { UserService } from './services/userService';
import { ProxyComponent } from './components/proxy/proxy.component';

@NgModule({
	// directives, components, and pipes
	declarations: [
		AppComponent,
		LandingComponent,
		LoginComponent,
		TranslatePipe,
		Component2Component,
		ProxyComponent,
		FormatDate
	],
	// modules
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		RouterModule,
		AppRouting,
		ReactiveFormsModule,
		BrowserAnimationsModule,
	],
	providers: [
		{ provide: 'IAppParams', useClass: AppParams },
		{ provide: 'IWebRequest', useClass: WebRequest },
		{ provide: 'ILoginService', useClass: LoginService },
		{ provide: 'ICommonService', useClass: CommonService },
		{ provide: 'ITranslateService', useClass: TranslateService },
		{ provide: 'IBroadcastService', useClass: BroadcastService },
		{ provide: 'IStorageService', useClass: StorageService },
		SecurityGuard,
		RoutingService,
		UserService,
		TRANSLATION_PROVIDERS,
		//	COMPILER_PROVIDERS
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }


