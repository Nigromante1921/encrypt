import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cesar',
  templateUrl: './cesar.component.html',
  styleUrls: ['./cesar.component.css']
})
export class CesarComponent implements OnInit{

  public formulario: FormGroup;

  private  readonly alphabet: string = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  
  constructor(private fb: FormBuilder){
    this.formulario = this.fb.group({
      desplazamiento: [null, Validators.required],
      palabra: [null, Validators.required],
      mensaje :  [null, '']
    });
  }
  
  ngOnInit(): void {
    /*const plaintext = "ESCUELA PROFESIONAL DE INFORMATICA Y SISTEMAS";
    const shift = 3;
    const ciphertext = this.encrypt(plaintext, shift);
    console.log(`Plaintext: ${plaintext}`);
    console.log(`Ciphertext: ${ciphertext}`);
    */
  }

  public submitForm() : void{
    const ciphertext = this.encrypt(this.formulario.get('palabra')?.value, parseInt(this.formulario.get('desplazamiento')?.value));
    console.log(this.formulario.get('palabra')?.value);
    console.log(this.formulario.get('desplazamiento')?.value);
    console.log(ciphertext);
    
    this.formulario.get('mensaje')?.setValue(ciphertext);
  }

  encrypt(text: string, shift: number): string {
    const result = text
        .toUpperCase()
        .split('')
        .map(char => {
            if (this.alphabet.includes(char)) {
                const index = (this.alphabet.indexOf(char) + shift) % 27; // Considerando la 'Ñ'
                return this.alphabet[(index + 27) % 27]; // Asegurarse de manejar correctamente el desplazamiento negativo
            } else {
                return char;
            }
        })
        .join('');

    return result;
  }

}
