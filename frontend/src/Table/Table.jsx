import React from 'react';
import './style.css';

function Table() {
    return (
        <div className='tableDivTop'>
            <table className='table'>
            <thead></thead>
            <tbody>
                    <tr className='trTable' cellSpacing='0'>
                        <th className='thNameHead'>Имя</th>
                        <th className='thDoctorHead'>Врач</th>
                        <th className='thDateHead'>Дата</th>
                        <th className='thComplaintsHead'>Жалобы</th>
                        <th className='thIconHead'></th>
                    </tr>
                    </tbody>
            </table>
        </div>
    );
}

export default Table;