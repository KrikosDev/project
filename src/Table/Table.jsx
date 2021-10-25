import React from 'react';
import './style.css';
import edit from '../edit.svg';
import deleteIcon from '../deleteIcon.svg';

function Table() {
    return (
        <div className='tableDiv'>
            <table className='table'>
                <tr className='trTable' cellspacing='0'>
                    <th>Имя</th>
                    <th>Врач</th>
                    <th>Дата</th>
                    <th>Жалобы</th>
                    <th></th>
                </tr>
            </table>
        </div>
    );
}

export default Table;