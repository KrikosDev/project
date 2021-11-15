import React, { useState } from "react";
import './style.css'
import { medics } from '../Constans'
import moment from "moment";
import axios from "axios";

function ModalEdit({
    setModalEditFlag,
    editItem,
    editId,
    setCurrentReception
}
) {
    const [name, setName] = useState(editItem.name)
    const [doctor, setDoctor] = useState(editItem.doctor)
    const [date, setDate] = useState(editItem.date)
    const [complaints, setComplaints] = useState(editItem.complaints)
    const [user_id] = useState(localStorage.getItem('user_id'));

    const onClickEdit = async (id) => {
        await axios
            .patch(`http://localhost:8000/reception/patchReception`, {
                user_id,
                _id: id,
                name,
                doctor,
                date,
                complaints,
            }).then((res) =>
                setCurrentReception(res.data.result),
                setModalEditFlag(false)
            )
            .catch((e) => {
                alert(
                    `Ошибка ${e}`
                )
            })
    }

    return (
        <div className='darkDiv'>
            <div className='ModalEdit'>
                <div className='headModalEdit'>
                    <p className='headP'>Изменить приём</p>
                </div>
                <div className='middleModalEdit' >
                    <p className='pInput'>Имя:</p>
                    <input
                        value={name}
                        className='middleInput'
                        onChange={(e) => setName(e.target.value)}
                    />


                    <p className='pInput'>Врач:</p>
                    <select
                        value={doctor}
                        onChange={(e) => setDoctor(e.target.value)}
                        className='middleInput'
                    >
                        {medics.filter(item => item).map(item => (
                            <option>{item}</option>
                        ))}
                    </select>
                    <p className='pInput'>Дата</p>
                    <input
                        value={`${moment(date).format('YYYY-MM-DD')}`}
                        onChange={(e) => setDate(e.target.value)}
                        className='middleInput'
                        type='date'
                    />
                    <p className='pInput'>Жалобы:</p>
                    <input
                        value={complaints}
                        className='footerInput'
                        onChange={(e) => setComplaints(e.target.value)}
                    />
                </div>
                <div className='footerModalEdit' >
                    <button
                        className='footerButton1'
                        onClick={() => setModalEditFlag(false)}
                    >Cancel</button>
                    <button
                        className='footerButton2'
                        onClick={() => onClickEdit(
                            editId
                        )}
                    >Save</button>
                </div>
            </div>
        </div>
    )
}

export default ModalEdit