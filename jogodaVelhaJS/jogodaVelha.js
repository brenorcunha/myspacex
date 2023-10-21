const item1 = document.getElementById("item1")
const item2 = document.getElementById("item2")
const item3 = document.getElementById("item3")
const item4 = document.getElementById("item4")
const item5 = document.getElementById("item5")
const item6 = document.getElementById("item6")
const item7 = document.getElementById("item7")
const item8 = document.getElementById("item8")
const item9 = document.getElementById("item9")
const its = document.querySelectorAll('item')

function comecaJogo(){
    //EQUI!
    its.forEach(function(item){
        item.classList.remove('win')
        item.textContent = ' '
    })
    
    let nome1 = prompt("insira o nome do jogador 1: ")
    let nome2 = prompt("insira o nome do jogador 2: ")

    let jogadorDaVez = document.getElementById('jogadorDaVez')
    jogadorDaVez.textContent = "Jogador da vez: " + nome1

    const input1 = document.getElementById("player1txt")
    const input2 = document.getElementById("player2txt")
    input1.innerText = nome1
    input2.innerText = nome2

    item1.addEventListener('click',function(){
        if(jogadorDaVez.textContent == "Jogador da vez: " + nome1) {
            item1.textContent = 'X'
            jogadorDaVez.textContent = "Jogador da vez: " + nome2
            jogadorDaVez.textContent = "Jogador da vez: " + nome2
        } else {
            item1.textContent = 'O';
            jogadorDaVez.textContent = "Jogador da vez: " + nome1
            document.getElementById('jogadorDaVez').textContent = "Jogador da vez: " + nome1
        }
        encerraJogo()
    })
    
    item2.addEventListener('click',function(){
        if (jogadorDaVez.textContent == "Jogador da vez: " + nome1) {
            item2.textContent ='X'
            jogadorDaVez.textContent = "Jogador da vez: " + nome2
            document.getElementById('jogadorDaVez').textContent = "Jogador da vez: " + nome2
        } else {
            item2.textContent = 'O';
            jogadorDaVez.textContent = "Jogador da vez: " + nome1
            document.getElementById('jogadorDaVez').textContent = "Jogador da vez: " + nome1
        }
        encerraJogo()
    })
    
    item3.addEventListener('click',function(){
        if(jogadorDaVez.textContent == "Jogador da vez: " + nome1) {
            item3.textContent = 'X'
            jogadorDaVez.textContent = "Jogador da vez: " + nome2
            document.getElementById('jogadorDaVez').textContent = "Jogador da vez: " + nome2
        } else {
            item3.textContent = 'O';
            jogadorDaVez.textContent = "Jogador da vez: " + nome1
            document.getElementById('jogadorDaVez').textContent = "Jogador da vez: " + nome1
        }
        encerraJogo()
    })
    item4.addEventListener('click',function(){
        if(jogadorDaVez.textContent == "Jogador da vez: " + nome1) {
            item4.textContent = 'X'
            jogadorDaVez.textContent = "Jogador da vez: " + nome2
            document.getElementById('jogadorDaVez').textContent = "Jogador da vez: " + nome2
        } else {
            item4.textContent = 'O';
            jogadorDaVez.textContent = "Jogador da vez: " + nome1
            document.getElementById('jogadorDaVez').textContent = "Jogador da vez: " + nome1
        }
        encerraJogo()
    })
    
    item5.addEventListener('click',function(){
        if(jogadorDaVez.textContent == "Jogador da vez: " + nome1) {
            item5.textContent = 'X'
            jogadorDaVez.textContent = "Jogador da vez: " + nome2
            document.getElementById('jogadorDaVez').textContent = "Jogador da vez: " + nome2
        } else {
            item5.textContent = 'O';
            jogadorDaVez.textContent = "Jogador da vez: " + nome1
            document.getElementById('jogadorDaVez').textContent = "Jogador da vez: " + nome1
        }
        encerraJogo()
    })
    item6.addEventListener('click',function(){
        if(jogadorDaVez.textContent == "Jogador da vez: " + nome1) {
            item6.textContent = 'X'
            jogadorDaVez.textContent = "Jogador da vez: " + nome2
            document.getElementById('jogadorDaVez').textContent = "Jogador da vez: " + nome2
        } else {
            item6.textContent = 'O';
            jogadorDaVez.textContent = "Jogador da vez: " + nome1
            document.getElementById('jogadorDaVez').textContent = "Jogador da vez: " + nome1
        }
        encerraJogo()
    })
    
    item7.addEventListener('click',function(){
        if(jogadorDaVez.textContent == "Jogador da vez: " + nome1) {
            item7.textContent = 'X'
            jogadorDaVez.textContent = "Jogador da vez: " + nome2
            document.getElementById('jogadorDaVez').textContent = "Jogador da vez: " + nome2
        } else {
            item7.textContent = 'O';
            jogadorDaVez.textContent = "Jogador da vez: " + nome1
            document.getElementById('jogadorDaVez').textContent = "Jogador da vez: " + nome1
        }
        encerraJogo()
    })
    
    item8.addEventListener('click',function(){
        if(jogadorDaVez.textContent == "Jogador da vez: " + nome1) {
            item8.textContent = 'X'
            jogadorDaVez.textContent = "Jogador da vez: " + nome2
            document.getElementById('jogadorDaVez').textContent = "Jogador da vez: " + nome2
        } else {
            item8.textContent = 'O';
            jogadorDaVez.textContent = "Jogador da vez: " + nome1
            document.getElementById('jogadorDaVez').textContent = "Jogador da vez: " + nome1
        }
        encerraJogo()
    })
    
    item9.addEventListener('click',function(){
        if(jogadorDaVez.textContent == "Jogador da vez: " + nome1) {
            item9.textContent = 'X'
            jogadorDaVez.textContent = "Jogador da vez: " + nome2
            document.getElementById('jogadorDaVez').textContent = "Jogador da vez: " + nome2
        } else {
            item9.textContent = 'O';
            jogadorDaVez.textContent = "Jogador da vez: " + nome1
            document.getElementById('jogadorDaVez').textContent = "Jogador da vez: " + nome1
        }
        encerraJogo()
    })
}

function encerraJogo(){
    if (item1.textContent=='X' && item2.textContent=='X' && item3.textContent=='X')
    {
        alert("Jogo acabou! Ganhou: " + document.getElementById('player1txt').textContent)
        item1.classList.add('win')
        item2.classList.add('win')
        item3.classList.add('win')
    }
    else if (item4.textContent=='X' && item5.textContent=='X' && item6.textContent=='X')
    {
        alert("Jogo acabou! Ganhou: " + document.getElementById('player1txt').textContent)
        item4.classList.add('win')
        item5.classList.add('win')
        item6.classList.add('win')
        
    }
    else if (item7.textContent=='X' && item8.textContent=='X' && item9.textContent=='X')
    {
        alert("Jogo acabou! Ganhou: " + document.getElementById('player1txt').textContent)
        item7.classList.add('win')
        item8.classList.add('win')
        item9.classList.add('win')
    }
    else if (item1.textContent=='X' && item4.textContent=='X' && item7.textContent=='X')
    {
        alert("Jogo acabou! Ganhou: " + document.getElementById('player1txt').textContent)
        item1.classList.add('win')
        item4.classList.add('win')
        item7.classList.add('win')
    }
    else if (item2.textContent=='X' && item5.textContent=='X' && item8.textContent=='X')
    {
        alert("Jogo acabou! Ganhou: " + document.getElementById('player1txt').textContent)
        item2.classList.add('win')
        item5.classList.add('win')
        item8.classList.add('win')
    }
    else if (item3.textContent=='X' && item6.textContent=='X' && item9.textContent=='X')
    {
        alert("Jogo acabou! Ganhou: " + document.getElementById('player1txt').textContent)
        item3.classList.add('win')
        item6.classList.add('win')
        item9.classList.add('win')
    }
    else if (item1.textContent=='X' && item5.textContent=='X' && item9.textContent=='X')
    {
        alert("Jogo acabou! Ganhou: " + document.getElementById('player1txt').textContent)
        item1.classList.add('win')
        item5.classList.add('win')
        item9.classList.add('win')
    }
    else if (item3.textContent=='X' && item5.textContent=='X' && item7.textContent=='X')
    {
        alert("Jogo acabou! Ganhou: " + document.getElementById('player1txt').textContent)
        item3.classList.add('win')
        item5.classList.add('win')
        item7.classList.add('win')
    }
    else if (item1.textContent=='O' && item2.textContent=='O' && item3.textContent=='O')
    {
        alert("Jogo acabou! Ganhou: " + document.getElementById('player2txt').textContent)
        item1.classList.add('win')
        item2.classList.add('win')
        item3.classList.add('win')
    }
    else if (item4.textContent=='O' && item5.textContent=='O' && item6.textContent=='O')
    {
        alert("Jogo acabou! Ganhou: " + document.getElementById('player2txt').textContent)
        item4.classList.add('win')
        item5.classList.add('win')
        item6.classList.add('win')
    }
    else if (item7.textContent=='O' && item8.textContent=='O' && item9.textContent=='O')
    {
        alert("Jogo acabou! Ganhou: " + document.getElementById('player2txt').textContent)
        item7.classList.add('win')
        item8.classList.add('win')
        item9.classList.add('win')
    }
    else if (item1.textContent=='O' && item4.textContent=='O' && item7.textContent=='O')
    {
        alert("Jogo acabou! Ganhou: " + document.getElementById('player2txt').textContent)
        item1.classList.add('win')
        item4.classList.add('win')
        item7.classList.add('win')
    }
    else if (item2.textContent=='O' && item5.textContent=='O' && item8.textContent=='O')
    {
        alert("Jogo acabou! Ganhou: " + document.getElementById('player2txt').textContent)
        item2.classList.add('win')
        item5.classList.add('win')
        item8.classList.add('win')
    }
    else if (item3.textContent=='O' && item6.textContent=='O' && item9.textContent=='O')
    {
        alert("Jogo acabou! Ganhou: " + document.getElementById('player2txt').textContent)
        item3.classList.add('win')
        item6.classList.add('win')
        item9.classList.add('win')
    }
    else if (item1.textContent=='O' && item5.textContent=='O' && item9.textContent=='O')
    {
        alert("Jogo acabou! Ganhou: " + document.getElementById('player2txt').textContent)
        item1.classList.add('win')
        item5.classList.add('win')
        item9.classList.add('win')
    }
    else if (item3.textContent=='O' && item5.textContent=='O' && item7.textContent=='O')
    {
        alert("Jogo acabou! Ganhou: " + document.getElementById('player2txt').textContent)
        item7.classList.add('win')
        item5.classList.add('win')
        item3.classList.add('win')
    } else if(item1.textContent!='' && item2.textContent!='' && item3.textContent!='' &&
    item4.textContent!='' && item5.textContent!='' && item6.textContent!='' &&
    item7.textContent!='' && item8.textContent!='' && item9.textContent!='' ){
        alert("Jogo acabou, DEU VELHA!!!")
    }
}
document.getElementById('start').addEventListener('click',comecaJogo)