import { useEffect, useState } from 'react';

export default function useArray(size, range) {
    const [array, setArray] = useState([]);
    const [highlighted, setHighlighted] = useState([]);
    const [sorted, setSorted] = useState([]);

    useEffect(() => {
        let randArray = [];

        for (let value = 0; value < size; value++) {
            let number = Math.floor(Math.random() * range) + 5;
            randArray.push(number);
        }
        setArray(randArray);
    }, []);

    return { array, setArray, highlighted, setHighlighted, sorted, setSorted };
}
