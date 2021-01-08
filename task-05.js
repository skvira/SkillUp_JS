let userInputCountry = prompt('Укажите страну доставки:');

if (userInputCountry) {
    let country = userInputCountry.toLowerCase();
    switch(country){
        case "китай":
            alert('Доставка в Китай будет стоить 150 кредитов');
            break;
        case "чили":
            alert('Доставка в Чили будет стоить 250 кредитов');
            break;
        case "австралия":
            alert('Доставка в Австралию будет стоить 165 кредитов');
            break;
        case "индия":
            alert('Доставка в Индию будет стоить 90 кредитов');
            break;
        case "ямайка":
            alert('Доставка на Ямайку будет стоить 130 кредитов');
            break;
    
            default: 
            alert('В вашей стране доставка не доступна')
    }
} else alert('Отменено пользователем!')

