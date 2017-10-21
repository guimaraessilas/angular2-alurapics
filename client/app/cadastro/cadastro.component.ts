import { Component } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";
import { Http, Headers } from "@angular/http";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector:'cadastro',
    moduleId: module.id,
    templateUrl: './cadastro.component.html'    
})

export class CadastroComponent{
    
    foto: FotoComponent = new FotoComponent();
    http: Http;
    meuForm: FormGroup;

    constructor(http: Http, fb: FormBuilder){
    
        this.http = http;
        
        this.meuForm = fb.group({
            
            titulo: ['', Validators.required],
            url: ['', Validators.required],
            descricao: ['']
        });
    
    }
    
    cadastrar(event){
    
        console.log(this.foto);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('v1/fotos', JSON.stringify(this.foto), { headers: headers })
            .subscribe(() => {
                this.foto = new FotoComponent();
                console.log("Foto Salva!");
            }, erro => console.log(erro));
    }
}