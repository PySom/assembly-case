import { useState } from 'react';

export const useInput = (type, val) => {
    const [value, setValue] = useState(val);
    const onChange = (e) => {
        const { target: { value } } = e;
        setValue(value);
    }
    const onSetValue = (item) => setValue(item);
    return {
        type, value, onChange, onSetValue
    }
}
