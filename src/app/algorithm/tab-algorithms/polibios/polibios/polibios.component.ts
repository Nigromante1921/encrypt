import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-polibios',
  templateUrl: './polibios.component.html',
  styleUrls: ['./polibios.component.css']
})
export class PolibiosComponent implements OnInit{

  public formulario: FormGroup;

  private readonly matriz: string[][];
  private readonly alphabet: string = "ABCDEFGHIKLMNOPQRSTUVWXYZ";

  constructor(private fb: FormBuilder){
    this.formulario = this.fb.group({
      palabra: [null, Validators.required],
      mensaje :  [null, '']
    });
    this.matriz = [
      ['A', 'B', 'C', 'D', 'E'],
      ['F', 'G', 'H', 'I', 'K'], // Omitir 'J', usar 'I' en su lugar
      ['L', 'M', 'N', 'O', 'P'],
      ['Q', 'R', 'S', 'T', 'U'],
      ['V', 'W', 'X', 'Y', 'Z']
    ];
  }

  ngOnInit(): void {
  
  }

  public submitForm() : void{
    const ciphertext = this.encrypt(this.formulario.get('palabra')?.value);
    this.formulario.get('mensaje')?.setValue(ciphertext);
  
  }

  private createGrid(): string[][] {
    const grid: string[][] = [];
    let index = 0;

    for (let i = 0; i < 5; i++) {
        const row: string[] = [];

        for (let j = 0; j < 5; j++) {
            if (index < this.alphabet.length) {
                row.push(this.alphabet[index]);
                index++;
            }
        }

        grid.push(row);
    }

    return grid;
}

private getCoordinates(char: string): { row: number, col: number } | null {
    const grid = this.createGrid();
    const charIndex = this.alphabet.indexOf(char);

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (grid[i][j] === char) {
                return { row: i, col: j };
            }
        }
    }

    return null;
}

encrypt(text: string): string {
    const grid = this.createGrid();
    let result = "";

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toUpperCase();

        if (char === "J") {
            result += "24"; // Special case for 'J'
        } else {
            const coordinates = this.getCoordinates(char);

            if (coordinates) {
                result += `${String.fromCharCode(coordinates.row + 65)}${String.fromCharCode(coordinates.col + 65)}`;
            } else {
                result += char; // If the character is not in the grid, leave it unchanged
            }
        }
    }

    return result;
}

}
