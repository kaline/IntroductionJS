alert('Dona Doce');
			var titulo = document.querySelector(".titulo");
			console.log(titulo);
			console.log(titulo.textContent);
            titulo.textContent = "DonaDoce";
            var produtos = document.querySelectorAll(".produto");

               


        

            var PrecoValido = true;
            var QuantidadeValida = true;

            for(var i = 0; i<produtos.length; i++){
                 var produto = produtos[i];

                 var infoPreco = document.querySelector(".info-preco");
                 var infoQuantidade = document.querySelector(".info-quantidade");
                 var infoTamanho = document.querySelector(".info-tamanho");
                 var infoPrecoText = infoPreco.textContent;
                 var infoQuantidadeText = infoQuantidade.textContent;
                 var infoTamanhoText = infoTamanho.textContent;


                console.log(produtos[i]);

            if(infoPrecoText <= 0 || infoQuantidadeText <= 0){
                if(infoPrecoText <= 0){
                    PrecoValido = false;
                    infoPrecoText.textContent = "Preco invalido"
                    //produtos.classList.add("produto-invalido");

                }if(infoQuantidadeText <= 0){
                    QuantidadeValida = false;
                    infoQuantidade.textContent = "Quantidade invalida"
                    produto.classList.add("produto-invalido");

                }
                console.log("Valor preco 1/ou quantidade inválido");


            }else{
                console.log("Dados validos");
            }
            
            }

