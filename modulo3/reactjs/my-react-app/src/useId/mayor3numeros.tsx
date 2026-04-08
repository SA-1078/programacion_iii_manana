import { useId } from 'react';

export default function Mayor3numeros() {
    const num1Id = useId();
    const num2Id = useId();
    const num3Id = useId();
    console.log('num1Id', num1Id)
    console.log('num2Id', num2Id)
    console.log('num3Id', num3Id)

    return (
        <form>
            <label htmlFor={num1Id}>Numero 1</label>
            <input id={num1Id} type="number" />
            <br />

            <label htmlFor={num2Id}>Numero 2</label>
            <input id={num2Id} type="number" />
            <br />

            <label htmlFor={num3Id}>Numero 3</label>
            <input id={num3Id} type="number" />
            <br />

            <button type="submit">Calcular</button>
        </form>
    );
}
