import PropTypes from "prop-types";
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length < 1) return;

        // setCategories( categories => [...categories, inputValue]);
        onNewCategory(inputValue.trim());
        setInputValue('');
        
    };

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
};


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
};