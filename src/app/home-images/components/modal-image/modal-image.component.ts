import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * Componetede modal para visualizar la imagen en una resolución mas grande
 */
@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.css']
})
export class ModalImageComponent {

  /**
   * Constructor del componente
   * @param  MatDialogRef<ModalImageComponent> dialogRef es la refrencia de material dialloog para ejecutar el componente del modal
   * @param string image recibe la url de la imagen que se va a visualizar
   */
  constructor(
    /**
     * es la refrencia de material dialog para ejecutar el componente del modal
     */
    public dialogRef: MatDialogRef<ModalImageComponent>,
    /**
     * Ejecucion por injeccion de componente dialog de material
     */
    @Inject(MAT_DIALOG_DATA) public image: string) {
  }

  /**
   * Metodo del boton de crerrar el modal
   * @example onNoClick()
   */
  onNoClick(): void {
    this.dialogRef.close();
  }

}
