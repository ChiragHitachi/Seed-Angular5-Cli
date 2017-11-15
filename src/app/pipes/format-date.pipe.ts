import { Pipe, PipeTransform } from "@angular/core"
//declare var moment: any;
@Pipe({
    name: 'formatDate'
})
export class FormatDate implements PipeTransform {
    transform(date: any, args?: any): any {
        let d = new Date(date)
        return d;// moment(d).format('DD/MM/YYYY hh:mm:ss');
    }
}