import { Component, OnInit, OnDestroy } from '@angular/core';
import { BitcoinAverageService } from '../service/bitcoinAverage-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-siglas',
  templateUrl: './lista-siglas.component.html',
  styleUrls: ['./lista-siglas.component.scss']
})
/**
 * @class
 * @implements - OnInit
 * ListaSiglasComponent
 */
export class ListaSiglasComponent implements OnInit, OnDestroy {
  /**
   * @public
   * @type {any[]}
   * atributo que guarda as siglas de todas as moedas
   */
  public siglasMoedas: any[]
  /**
   * @public
   * @type {any}
   * atributo que guarda a moeda selecionada a partir da listagem no template
   */
  public moedaSelecionada: any;
  /**
   * @public
   * @type {boolean}
   * atributo de controle para mostrar a tabela
   */
  public siglasCarregadas: boolean
  /**
   * @public
   * @type {Subscription}
   * atributo de controle para mostrar a tabela
   */
  public observableSiglas: Subscription

  /**
   * @constructor
   * @param { BitcoinAverageService } bitcoinAverage - atributo do serviço BitcoinAverageService
   */
  constructor(public bitcoinAverage: BitcoinAverageService) { }

  ngOnInit() {

    this.siglasCarregadas = false
    this.siglasMoedas = []

    this.observableSiglas = this.bitcoinAverage.bucarNomesCriptoMoedas()
      .subscribe(
        (siglas: any) => {
          this.siglasCarregadas = true
          let siglasMoedasAux = Object.keys(siglas.crypto)
          siglasMoedasAux.map((sigla: any) => {
            let moeda = {
              sigla: sigla,
              nome: siglas.crypto[sigla]
            }
            this.siglasMoedas.push(moeda)
          })

        },
        (erro: any) => { this.siglasCarregadas = false }
      )
  }

  /**
   * Seleciona a moeda pela sigla 
   * @public
   * @param{string} sigla - sigla da moeda
   */

  public selecionarMoeda(sigla: string) {
    this.moedaSelecionada = this.siglasMoedas.find((moeda) => {
      return moeda.sigla === sigla
    })
  }

  ngOnDestroy() {
    this.observableSiglas.unsubscribe
  }

}
