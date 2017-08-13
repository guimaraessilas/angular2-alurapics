import { Component, Input } from "@angular/core";

@Component({
    selector: 'painel',
    templateUrl: './painel.component.html',
    moduleId: module.id
})

export class PainelComponent{
    @Input()titulo: string;
}