
import { Component, Input } from '@angular/core'


@Component({
    selector: 'app-greeting',
    template: `
        <div class="alert alert-info">
            <p>{{message}}</p>
            <hr/>
            <p>{{time}}</p>
        </div>
    `
})
export class Greeting {

    @Input() message: string = ''
    @Input() time: string = ''

}