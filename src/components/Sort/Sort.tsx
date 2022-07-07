import React from 'react';
import style from './Sort.module.css';

type SortPropsType = {
    sortBy: (event: React.MouseEvent<HTMLSpanElement>) => void
}

const Sort: React.FC<SortPropsType> = ({sortBy}) => {
    const onClickHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
        sortBy(e);
    };
    return (
        <div className={style.sortBlock}>
            <h3>Сортировка</h3>
            <button data-sortby="city" onClick={onClickHandler}>по городу</button>
            <button data-sortby="company" onClick={onClickHandler}>по компании</button>
        </div>
    );
};

export default Sort;