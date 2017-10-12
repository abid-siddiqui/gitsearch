import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private usename:string;

    constructor(){
        console.log('github service ready' );
        this.usename='abid siddiqui';
    }
}