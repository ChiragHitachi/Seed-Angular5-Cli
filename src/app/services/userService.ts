import { Injectable, Inject } from "@angular/core";
import { IWebRequest, ICommonService } from "../interfaces/interfaces";
import { IResponse, User } from "../models/viewModels";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService{
    getUsers :() => Observable<IResponse<User[]>>;
    getUser :(id : number) => Observable<IResponse<User>>;
    searchUser : (user:User) => Observable<IResponse<User>>;
    saveUser  : (user:User) => Observable<IResponse<User>>;

    constructor( @Inject('IWebRequest') private webRequest: IWebRequest, 
    @Inject('ICommonService') private commonService: ICommonService) {
        var vm = this;
        vm.getUsers  = () =>{
            return webRequest.get<User[]>("http://localhost:57016/api/Values");
        };
        vm.getUser  = (id : number) => {
            return webRequest.get<User>("http://localhost:57016/api/Values", {id: id});
        };
        vm.searchUser  = (user:User) => {
            return webRequest.get<User>("http://localhost:57016/api/User", user);
        };
        vm.saveUser  = (user:User) => {
            return webRequest.post<User>("http://localhost:57016/api/User", user);
        };
    }   
} 