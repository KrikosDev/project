import React from "react"
import moment from "moment"
import edit from '../edit.svg'
import deleteIcon from '../deleteIcon.svg'


function CurrentReceptionTable({ openModalEdit, openModalDelete, reception, user_id }) {
    return (
        <table className='tableReception'>
            <thead></thead>
            <tbody>
                    {reception.map((item, index) => (
                        <tr className='trTableReception' key={`${item.id}-${index}-${user_id}`}>
                            <th className='thName'>{item.name}</th>
                            <th className='thDoctor' >{item.doctor}</th>
                            <th className='thDate' >{`${moment(item.date).format("DD.MM.YYYY")}`}</th>
                            <th className='thComplaints' >{item.complaints}</th>
                            <th className='thIcon'>
                                <img
                                    src={edit}
                                    alt='Пикчи нет'
                                    className='editReception'
                                    onClick={() => openModalEdit(
                                        item,
                                        item._id
                                    )}
                                />
                                <img
                                    src={deleteIcon}
                                    alt='Пикчи нет'
                                    className='delete'
                                    onClick={() => openModalDelete(item._id)}
                                />
                            </th>
                        </tr>
                    )
                    )}
                    </tbody>
                </table>
    )
}

export default CurrentReceptionTable
