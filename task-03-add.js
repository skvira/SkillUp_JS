// Написати ф-ю яка приймає 2 параметра (розміри в ремах - "2rem") і
// велечину базового шрифта ("20px") і вертає конвертований розмір в
// пікселях

function convert_rem_to_px (rem, pxBase) {
    
    let remNum = Number(rem.replace('rem',''));
    let pxBaseNum = Number(pxBase.replace('px',''));
    let outPx = remNum*pxBaseNum + 'px';
    console.log(outPx);
    
    return outPx;
}

convert_rem_to_px('30rem', '50px');