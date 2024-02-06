import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-escitala',
  templateUrl: './escitala.component.html',
  styleUrls: ['./escitala.component.css']
})
export class EscitalaComponent implements OnInit{

  public formulario: FormGroup;
  public matriz_palabra: string[][] = [];

  constructor(private fb: FormBuilder){
    this.formulario = this.fb.group({
      filas: [null, Validators.required],
      columnas: [null, Validators.required],
      palabra: [null, Validators.required],
      mensaje :  [null, '']
    });
  } 
  ngOnInit(): void {
    
  }

  public submitForm() : void{
    this.matriz_palabra = this.crearMatrizConPalabra(this.formulario.get('filas')?.value,this.formulario.get('columnas')?.value,this.formulario.get('palabra')?.value.replace(/\s/g, "").toUpperCase());
    this.imprimirMatriz(this.matriz_palabra);
  }

  public crearMatrizConPalabra(filas: number, columnas: number, palabra: string): string[][] {
    // Verificar que el tamaño de la palabra no supere el tamaño de la matriz
    if (palabra.length > filas * columnas) {
      console.error("Error: El tamaño de la palabra es mayor que el tamaño de la matriz.");
    }
  
    const matriz: string[][] = [];
  
    // Llenar la matriz con las letras de la palabra
    let index = 0;
    for (let i = 0; i < filas; i++) {
      const fila: string[] = [];
      for (let j = 0; j < columnas; j++) {
        if (index < palabra.length) {
          fila.push(palabra[index]);
        } else {
          fila.push(''); // Llenar con espacio en blanco si la palabra es más corta
        }
        index++;
      }
      matriz.push(fila);
    }
  
    return matriz;
  }
  
  public obtenerColumnas(matriz: string[][]): string[][] {
    // Transponer la matriz para intercambiar filas y columnas
    const columnas: string[][] = matriz[0].map((_, i) => matriz.map(row => row[i]));
    return columnas;
  }
  
  public imprimirMatriz(matriz: string[][]): void {
    const columnas = this.obtenerColumnas(matriz);
    const todosLosValores: string[] = columnas.flat();
  
    // Insertar un espacio después de cada conjunto de numFilas + 1 caracteres
    const cadenaResultante: string = todosLosValores.map((valor, index) =>
      (index + 1) % this.formulario.get('filas')!.value === 0 && index !== 0 ? `${valor} ` : `${valor}`
    ).join('');
  
    // Actualizar el valor del control 'mensaje' en el formulario
    this.formulario.get('mensaje')?.setValue(cadenaResultante);
  }

  public imprimirMatrizYPalabras(matriz: string[][]): void {
    let mensaje = '';
  
    // Imprimir la matriz con corchetes y comas
    for (const fila of matriz) {
      mensaje += `[${fila.join(', ')}]\n`;  // Agregar corchetes y coma entre elementos de la fila
    }
  
    mensaje += '\n' + '---------------------- palabra encryptada--------------- ' + '\n';  // Agregar una línea en blanco entre la matriz y las palabras cifradas
  
    const columnas = this.obtenerColumnas(matriz);
    const todosLosValores: string[] = columnas.flat();
  
    // Insertar un espacio después de cada conjunto de numFilas + 1 caracteres
    const cadenaResultante: string = todosLosValores.map((valor, index) =>
      (index + 1) % this.formulario.get('filas')!.value === 0 && index !== 0 ? `${valor} ` : `${valor}`
    ).join('');
  
    // Agregar las palabras cifradas debajo de la matriz
    mensaje += cadenaResultante;
  
    // Actualizar el valor del control 'mensaje' en el formulario
    this.formulario.get('mensaje')?.setValue(mensaje);

    
  }
  
  

}
