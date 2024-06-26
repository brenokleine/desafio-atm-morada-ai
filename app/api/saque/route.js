
import { saqueAtm } from "@/public/utils/saqueAtm";

export const POST = async (req, res) => {

    const { valor } = await req.json();

    console.log('body', req.body);

    if (typeof valor !== 'number' || valor < 0) {
        const message = { error: 'Valor invalido' }
        return new Response(JSON.stringify(message), { status: 400 })
    }

    const result = saqueAtm(valor);

    if (result['sobra']) {
        //* em caso de sobra, sugere o valor mais próximo, priorizando a retirada de menos dinheiro (melhor pro banco que o dinheiro nao saia de la)
        const message = { suggested: valor - result['sobra'] }
        return new Response(JSON.stringify(message), { status: 406 })
    } else {
        console.log('result', result);
        return new Response(JSON.stringify(result), { status: 200 })
    }
}