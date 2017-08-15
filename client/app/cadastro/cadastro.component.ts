import { Component } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";

@Component({
    selector:'cadastro',
    moduleId: module.id,
    templateUrl: './cadastro.component.html'    
})
export class CadastroComponent{
    
    foto: FotoComponent = new FotoComponent();

    cadastrar(event){
        event.preventDefault();
        console.log(this.foto);
    }
}