import { useState } from "react"

//consulta o valor do local storage -> lógica de controle de estado
export function useLocalStorage<T>(item: string){
    const storageValue = localStorage.getItem(item)

    const [value, setValue] = useState(storageValue ? JSON.parse(storageValue) : null);

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(item, JSON.stringify(newValue));
    }
    return {value, updateLocalStorage}
}
