import { Injectable, Output, EventEmitter, Inject } from '@angular/core';
import { ILoginDetail } from '../models/viewModels';
import { ICommonService, IStorageService } from '../interfaces/interfaces';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class RoutingService {
    constructor(private http: HttpClient) { }
    private _mockeJsonUrl = '../../assets/images/routes.json';

    public getRoutes = () => {
        var routes = [];
        //return Observable.of(routes);

        const authService = this._mockeJsonUrl;
        return this.http.get(authService);  

    }
}


