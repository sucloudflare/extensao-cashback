// Definir lojas e valores de cashback
const lojasParceiras = {
    "mercadolivre.com": 5,
    "shoope.com": 10,
    "loja3.com": 8,
};

// Obter o domínio atual
const currentDomain = window.location.hostname.replace("www.", "");

// Verificar se a loja é parceira
if (lojasParceiras[currentDomain]) {
    const cashback = lojasParceiras[currentDomain];
    alert(`Ganhe ${cashback}% de cashback nesta compra!`);
}
