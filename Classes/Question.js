class Question {

  constructor() {
    this.title = createElement('h1');
    this.input1 = createInput("").attribute("placeholder", "Digite seu nome aqui...");
    this.input2 = createInput("").attribute("placeholder", "Digite a letra da alternativa...");
    this.button = createButton('Enviar');
    this.question = createElement('h2');
    this.option1 = createElement('h2');
    this.option2 = createElement('h2');
    this.option3 = createElement('h2');
    this.option4 = createElement('h2');
    this.message = createElement("h3");
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("SE LIGA NO QUIZ");
    this.title.position(545, 20);

    this.question.html("*Se ontem fosse amanhã, hoje seria sexta-feira. Que dia é hoje?" );
    this.question.position(365, 100);

    this.option1.html("A) Segunda-feira");
    this.option1.position(480, 180);
    this.option2.html("B) Quarta-feira");
    this.option2.position(720, 180);
    this.option3.html("C) Sexta-feira");
    this.option3.position(480, 290);
    this.option4.html("D) Domingo");
    this.option4.position(720, 290);

    this.input1.position(490, 410);
    this.input2.position(690, 410);
    this.button.position(650, 470);

    this.button.mousePressed(()=>{
      
      this.message.html("Obrigado, sua resposta foi enviada!");
      this.message.position(485, 500);
    });
  }
}
