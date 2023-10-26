var blocoCasamento = document.getElementById('blocoEternizeMomentosCasamento');
var blocoFormatura = document.getElementById('blocoEternizeMomentosFormatura');
var blocoAniversario = document.getElementById('blocoEternizeMomentosAniversario');
var blocoNascimento = document.getElementById('blocoEternizeMomentosNascimento');

document.getElementById('linkCasamento').addEventListener('mouseover', function() {
    abreBlocoCasamento(blocoCasamento);
  });
  
document.getElementById('linkFormatura').addEventListener('mouseover', function() {
    abreBlocoFormatura(blocoFormatura);
  });

document.getElementById('linkAniversario').addEventListener('mouseover', function() {
    abreBlocoAniversario(blocoAniversario);
  });

document.getElementById('linkNascimento').addEventListener('mouseover', function() {
    abreBlocoNascimento(blocoNascimento);
  });

function abreBlocoCasamento(bloco) {
    bloco.style.opacity = 1;
    bloco.style.display = 'flex'

    blocoFormatura.style.display = 'none';
    blocoFormatura.style.opacity = 0;

    blocoAniversario.style.display = 'none';
    blocoAniversario.style.opacity = 0;

    blocoNascimento.style.display = 'none';
    blocoNascimento.style.opacity = 0;
}

function abreBlocoFormatura(bloco) {
    bloco.style.opacity = 1;
    bloco.style.display = 'flex'

    blocoCasamento.style.display = 'none';
    blocoCasamento.style.opacity = 0;

    blocoAniversario.style.display = 'none';
    blocoAniversario.style.opacity = 0;

    blocoNascimento.style.display = 'none';
    blocoNascimento.style.opacity = 0;
}

function abreBlocoAniversario(bloco) {
    bloco.style.opacity = 1;
    bloco.style.display = 'flex'

    blocoCasamento.style.display = 'none';
    blocoCasamento.style.opacity = 0;

    blocoFormatura.style.display = 'none';
    blocoFormatura.style.opacity = 0;

    blocoNascimento.style.display = 'none';
    blocoNascimento.style.opacity = 0;
}

function abreBlocoNascimento(bloco) {
    bloco.style.opacity = 1;
    bloco.style.display = 'flex'

    blocoCasamento.style.display = 'none';
    blocoCasamento.style.opacity = 0;

    blocoFormatura.style.display = 'none';
    blocoFormatura.style.opacity = 0;

    blocoAniversario.style.display = 'none';
    blocoAniversario.style.opacity = 0;
}


 