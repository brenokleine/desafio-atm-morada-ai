
//* desafio nao diz limite de notas, assumiu-se que é infinito o numero de notas

export function saqueAtm(valor: number): Record<string, number>{
  
    const availableBills = [100, 50, 20, 10, 5, 2];

    const result: Record<number, number> = {
        100: 0,
        50: 0,
        20: 0,
        10: 0,
        5: 0,
        2: 0,
    };

    if(valor == 0){
        return result;
    }

    for (const bill of availableBills) {
        result[bill] = Math.floor(valor / bill);
        valor %= bill;

        // casos a parte de complemento
        switch (valor) {
            //impossivel completar sobrando 1
            case 1:
                return { 'sobra': valor };

            //usaria uma de 2, porém, impossivel completar sobrando 1
            case 3:
                return { 'sobra': valor - 2 };
            
            //substitui uma de 5 que faria sobrar 1 por três de 2
            case 6:
                result[2] = 3;
                result[5] = 0;
                return result;

            //substitui uma de 5 que faria usar uma de 2 e sobrar 1, por quatro de 2
            case 8:
                result[2] = 4;
                result[5] = 0;
                return result;

            default:
                break;
        }
    }

    return result;
}
