// Definir lojas e valores de cashback
const lojasParceiras = {
    "loja1.com": 5,
    "loja2.com": 10,
    "loja3.com": 8,
};

// Obter o domínio atual
const currentDomain = window.location.hostname.replace("www.", "");

// Verificar se a loja é parceira
if (lojasParceiras[currentDomain]) {
    const cashback = lojasParceiras[currentDomain];
    alert(`Ganhe ${cashback}% de cashback nesta compra!`);
}
