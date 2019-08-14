import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amarelinho',
  templateUrl: './amarelinho.component.html',
  styleUrls: ['./amarelinho.component.css']
})
export class AmarelinhoComponent implements OnInit {

  content = 'Posso ouvir o vento passar'+
            'Assistir à onda bater'+
            'Mas o estrago que faz'+
            'A vida é curta pra ver '+

            'Eu pensei'+
            'Que quando eu morrer'+
            'Vou acordar para o tempo'+
            'E para o tempo parar'+

            'Um século, um mês'+
            'Três vidas e mais'+
            'Um passo pra trás'+
            'Por que será?'+
            'Vou pensar'+

            'Como pode alguém sonhar'+
            'O que é impossível saber?'+
            'Não te dizer o que eu penso'+
            'Já é pensar em dizer'+
            'E isso, eu vi'+
            'O vento a leva'+
            'Não sei mais'+
            'Sinto que é como sonhar'+
            'Que o esforço pra lembrar'+
            'É a vontade de esquecer'+
            'E isso por quê?'+
            'Diz mais'+

            'Se a gente já não sabe mais'+
            'Rir um do outro, meu bem'+
            'Então o que resta é chorar e, talvez';

  constructor() { }

  ngOnInit() {
  }

}
