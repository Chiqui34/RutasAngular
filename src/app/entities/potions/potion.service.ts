import { Injectable } from '@angular/core';
import { Potion, POTIONTYPE } from './potion-model';

@Injectable({
  providedIn: 'root'
})

export class PotionService {

  constructor() { }

  public getAllPosition(): Potion[]{

    const potions: Potion[] = [];

    const pocion01: Potion = new Potion(1, 'Poción de maná menor', 'Incrementa el maná en 25pt', 
    '../../../assets/imgs/pociones/t_01.PNG', POTIONTYPE.MANA, true);
    potions.push(pocion01);

    const pocion02: Potion = new Potion(2, 'Poción de energía menor', 'Incrementa la energía en 25pt', 
    '../../../assets/imgs/pociones/t_02.PNG', POTIONTYPE.ENERGIA, false);
    potions.push(pocion02);

    const pocion03: Potion = new Potion(3, 'Poción de vida menor', 'Incrementa la vida en 25pt', 
    '../../../assets/imgs/pociones/t_03.PNG', POTIONTYPE.VIDA, false);
    potions.push(pocion03);

    const pocion04: Potion = new Potion(4, 'Poción de maná mayor', 'Proporciona la habilidadde volar durante 5 minutos', 
    '../../../assets/imgs/pociones/t_01.PNG', POTIONTYPE.MANA, false);
    potions.push(pocion04);

    const pocion05: Potion = new Potion(5, 'Poción de energía mayor', 'El personaje desaparece durante 1 minuto', 
    '../../../assets/imgs/pociones/t_02.PNG', POTIONTYPE.ENERGIA, true);
    potions.push(pocion05);

        const pocion06: Potion = new Potion(5, 'Poción de vida mayor', 'El personaje desaparece durante 1 minuto', 
    '../../../assets/imgs/pociones/t_03.PNG', POTIONTYPE.VIDA, true);
    potions.push(pocion06);

    return potions;

  }

  public getPotionsByType(tipo: POTIONTYPE): Potion[]{
    const arrayPocion = this.getAllPosition();
    const tipoPocion = arrayPocion.filter(arrayTipo => arrayTipo.tipo === tipo );
    //return arrayPocion.filter(arrayTipo => arrayTipo.tipo === tipo );
    return tipoPocion;
  }

}