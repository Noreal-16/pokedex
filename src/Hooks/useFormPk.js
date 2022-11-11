import {useState} from "react";

export const useFormPk = (initialForm = {}) => {
    const [data, setData] = useState(initialForm);
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setData({
            ...data,
            [name]: value
        })
    }
    const onResetInput = () => {
        setData(initialForm);
    }
    return {
        ...data,
        data,
        onInputChange,
        onResetInput
    }
}