import React from 'react';
import './style.css';
import edit from '../edit.svg';
import deleteIcon from '../deleteIcon.svg';

function Table() {
    return (
        <div className='tableDivTop'>
            <table className='table'>
                <tr className='trTable' cellspacing='0'>
                    <th className='thNameHead'>Имя</th>
                    <th className='thDoctorHead'>Врач</th>
                    <th className='thDateHead'>Дата</th>
                    <th className='thComplaintsHead'>Жалобы</th>
                    <th className='thIconHead'></th>
                </tr>
            </table>
        </div>
    );
}

export default Table;