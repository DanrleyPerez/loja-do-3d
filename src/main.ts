import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  window.addEventListener("scroll", function() {
    var imagem = document.getElementById("imagem-principal");

    if(imagem){
    var posicao = imagem.getBoundingClientRect().bottom;
    var altura = window.innerHeight;
    if (posicao < altura ) {
      imagem.style.opacity = "0";
      imagem.style.transform = "translateY(-100px)";
    }
  }
  });
