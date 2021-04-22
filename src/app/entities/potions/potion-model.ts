export enum POTIONTYPE {
  VIDA,
  MANA,
  ENERGIA
}

export class Potion {
   id: number;
   titulo:string;
   descripcion: string;
   urlImagen: string;
   tipo: POTIONTYPE;
   esEpica: boolean;

   constructor(id:number, titulo:string, descripcion:string, urlImagen: string,
       tipo: POTIONTYPE, esEpica: boolean) {
      this.id = id;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.urlImagen = urlImagen;
      this.tipo = tipo;
      this.esEpica = esEpica;
   }
}