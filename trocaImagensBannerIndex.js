var imagensBanner1 = [
    "https://cisjoias.com/wp-content/uploads/2021/02/TRANSICAO_10.jpg",
    "https://s3.us-east-1.amazonaws.com/vnda-cockpit/www-ahmijoias-com-br/2023/03/09/6409e137000cbPeasCuringa--09.03.23.jpg",
    "https://images.tcdn.com.br/img/img_prod/680812/conjunto_gargantilha_e_bracelete_martelado_folheado_a_ouro_18k_36111869_1_b77831c43a90fda87077e29ac247aac3.jpg",
    "https://images.tcdn.com.br/img/img_prod/741756/colar_trevo_branco_semijoia_ouro_18k_24011_1_76bf950a9e8c5e9f5e4b46e75ba91035.jpg",
    "https://blog.casadasaliancas.com.br/wp-content/uploads/2022/04/diferenca-de-joias-semijoias-e-bijuterias-2.jpg"
];

var imagensBanner2 = [
    "https://inovetecstore.com.br/cdn/shop/products/1_8_11zon.jpg?v=1677781576",
    "https://m.media-amazon.com/images/I/71VU9YKL-WL._AC_UF1000,1000_QL80_.jpg",
    "https://joiasgold.vteximg.com.br/arquivos/ids/211025-1000-1000/Anel-de-Ouro-18k-Masculino-Onix-Quadrado-com-Diamantes-an33587-Joias-gold.jpg?v=637140829336830000",
    "https://images.yampi.me/assets/stores/megaxx/uploads/images/joia-masculina-modelo-dominadora-19cm-wolf-head-bracelet-61df6b92ca33e-large.jpg",
    "https://images.tcdn.com.br/img/img_prod/1044174/joias_masculinas_com_banho_a_ouro_18k_877_2_fbd993a4374344e510612f4c719d85cf.jpg"
];

var imagemAtualBanner1 = 0;
var imagemAtualBanner2 = 0;

function trocaImagemBanner1() {
    var imagem = document.getElementById('imagemBanner1');
    imagem.style.opacity = 0;

    setTimeout(function() {
        imagem.src = imagensBanner1[imagemAtualBanner1];
        imagem.style.opacity = 1;
        imagemAtualBanner1 = (imagemAtualBanner1 + 1) % imagensBanner1.length;
    }, 1000);
}

function trocaImagemBanner2() {
    var imagem = document.getElementById('imagemBanner2');
    imagem.style.opacity = 0;

    setTimeout(function() {
        imagem.src = imagensBanner2[imagemAtualBanner2];
        imagem.style.opacity = 1;
        imagemAtualBanner2 = (imagemAtualBanner2 + 1) % imagensBanner2.length;
    }, 1000);
}

setInterval(trocaImagemBanner1, 5000);
setInterval(trocaImagemBanner2, 6000);