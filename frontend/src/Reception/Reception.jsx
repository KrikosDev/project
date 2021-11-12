import React, { useEffect, useState } from "react";
import {
    useHistory
} from 'react-router-dom';
import { medics } from '../Constans'
import Sort from '../Sort/Sort'
import './style.css'
import Table from '../Table/Table'
import axios from "axios";
import DateFilter from '../DateSort/DateFilter'
import moment from "moment";
import ModalEdit from '../Modal/ModalEdit'
import ModalDelete from '../Modal/ModalDelete'
import CurrentReceptionTable from "../Table/CurrentReceptionTable";
import _ from 'lodash';

function Reception() {
    const [user_id] = useState(localStorage.getItem('user_id'));
    const [name, setName] = useState('');
    const [doctor, setDoctor] = useState('');
    const [date, setDate] = useState(undefined);
    const [complaints, setComplaints] = useState('');
    const [editId, setEditId] = useState(undefined);
    const [editItem, setEditItem] = useState(undefined);
    const token = localStorage.getItem('token')
    const history = useHistory();
    const [icon, setIcon] = useState(true);
    const [currentReception, setCurrentReception] = useState([]);
    const [reception, setReception] = useState([]);
    const [filtReception, setFiltReception] = useState([]);
    const [modalEditFlag, setModalEditFlag] = useState(undefined);
    const [modalDeleteFlag, setModalDeleteFlag] = useState(undefined);
    const [sorting, setSorting] = useState({ key: "none", dir: '' });
    const [startDate, setStartDate] = useState(undefined)
    const [endDate, setEndDate] = useState(undefined)

    useEffect(async () => {
        await axios
            .get(`http://localhost:8000/reception/getReceptions?user_id=${user_id}`)
            .then((res) =>
                setCurrentReception(res.data.result)
            )
            .catch((e) => {
                alert(
                    `Ошибка ${e}`
                )
            })
    }, [])

    const FilterReception = (startDate, endDate) => {
        let copyReceptionForFilter = reception
        const startFiltDate = moment(startDate).format('YYYY-MM-DD')
        const endFiltDate = moment(endDate).format('YYYY-MM-DD');

        if (endDate === null || !endDate) {
            let newReceptionForFilter = copyReceptionForFilter.filter((item) => {
                return item.date >= startDate
            });
            setFiltReception(newReceptionForFilter)
        }
        if (startDate === null || !startDate) {
            let newReceptionForFilter = copyReceptionForFilter.filter((item) => {
                return moment(moment(item.date).format('YYYY-MM-DD')).isSame(endFiltDate) || moment(moment(endFiltDate).format('YYYY-MM-DD')).isAfter(item.date)
            });
            setFiltReception(newReceptionForFilter)
        }
        if (startDate !== null && endDate !== null && startDate && endDate) {
            let newReceptionForFilter = copyReceptionForFilter.filter((item) => {
                return moment(item.date).isBetween(startFiltDate, endFiltDate)
                    || moment(moment(item.date).format('YYYY-MM-DD')).isSame(startFiltDate) || moment(moment(item.date).format('YYYY-MM-DD')).isSame(endFiltDate);
            });
            setFiltReception(newReceptionForFilter)
        }
        if (!startDate && !endDate) {
            let newReceptionForFilter = copyReceptionForFilter.map((item) => {
                return item
            });
            setFiltReception(newReceptionForFilter)
        }
        if (icon === true && startDate === null && endDate === null) {
            setFiltReception(copyReceptionForFilter)
        }
    }

    useEffect(() => {
        setStartDate(null)
        setEndDate(null)
        SortReception(sorting);
        setFiltReception(reception)
    }, [icon]);

    useEffect(() => {
        SortReception(sorting);
    }, [currentReception]);

    useEffect(() => {
        FilterReception(startDate, endDate);
    }, [reception]);


    const SortReception = (field) => {
        let copyReception = currentReception.concat();
        let key = field.key;

        if (field.dir === 'up') {
            let sortArr = _.sortBy((copyReception), (key), function (item) {
                return item.key;
            })
            setReception(sortArr)
        }


        if (field.dir === 'down') {
            let sortArr = _.sortBy((copyReception), (key), function (item) {
                return item.key;
            })
            setReception(sortArr.reverse())
        }

        if (field.dir === '') {
            setReception(copyReception)
        }
    }

    const onClickRemove = async (id) => {
        await axios
            .delete(`http://localhost:8000/reception/deleteReception?id=${id}&user_id=${user_id}`)
            .then((res) =>
                setCurrentReception(res.data.result),
                setModalDeleteFlag(false)
            )
            .catch((e) => {
                alert(
                    `Ошибка ${e}`
                )
            })
    }

    const openModalEdit = (item, id) => {
        setEditItem(item);
        setEditId(id);
        setModalEditFlag(true);
    };

    const openModalDelete = (item) => {
        setEditId(item);
        setModalDeleteFlag(true);
    };

    const createReception = async () => {
        {
            await axios
                .post(`http://localhost:8000/reception/createNewReception`, {
                    name,
                    doctor,
                    date,
                    complaints,
                    user_id,
                })
                .then((res) => {
                    setCurrentReception(res.data.result)
                    setName('')
                    setDate('')
                    setDoctor('')
                    setComplaints('')
                })
                .catch((e) => {
                    alert(
                        `Ошибка ${e}`
                    )
                })
        }
    }

    if (!token) {
        history.goBack();
    }

    return (
        <div className='receptionBig'>
            <div id='reception'>
                <div className='receptionMenu'>
                    <p className='pReception'>Имя:</p>
                    <input
                        value={name}
                        className='receprionInput'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='receptionMenu'>
                    <p className='pReception'>Врач:</p>
                    <select
                        className='receprionInput'
                        onChange={(e) => setDoctor(e.target.value)}
                        value={doctor}
                    >
                        {medics.map((item, index) => (
                            <option key={`doctor-${index}`} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <div className='receptionMenu'>
                    <p className='pReception'>Дата:</p>
                    <input
                        value={date}
                        type='date'
                        className='receprionInput'
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className='receptionMenu'>
                    <p className='pReception'>Жалобы:</p>
                    <input
                        value={complaints}
                        className='receprionInput'
                        onChange={(e) => setComplaints(e.target.value)}
                    />
                </div>
                <button
                    className='edit'
                    onClick={() =>
                        name && doctor && date && complaints
                            ? createReception()
                            : alert('Пропущено одно из полей')
                    }
                >
                    Добавить
                </button>
            </div>
            <div className='receptionMiddle'>
                <Sort
                    icon={icon}
                    setIcon={setIcon}
                    SortReception={SortReception}
                    setSorting={setSorting}
                    sorting={sorting}
                />
            </div>
            <div className='dateFilter'>
                {
                    !icon &&
                    <DateFilter
                        setIcon={setIcon}
                        endDate={endDate}
                        startDate={startDate}
                        setEndDate={setEndDate}
                        setStartDate={setStartDate}
                        FilterReception={FilterReception}
                    />
                }
            </div>
            <Table />
            <div className='tableDiv'>

                {
                    icon ? <CurrentReceptionTable
                        reception={reception}
                        user_id={user_id}
                        openModalEdit={openModalEdit}
                        openModalDelete={openModalDelete}
                    />
                        :
                        <CurrentReceptionTable
                            reception={filtReception}
                            user_id={user_id}
                            openModalEdit={openModalEdit}
                            openModalDelete={openModalDelete}
                        />

                }


            </div>
            {
                modalEditFlag &&
                <ModalEdit
                    setCurrentReception={setCurrentReception}
                    setModalEditFlag={setModalEditFlag}
                    editItem={editItem}
                    editId={editId}
                />
            }
            {
                modalDeleteFlag &&
                <ModalDelete
                    setModalDeleteFlag={setModalDeleteFlag}
                    onClickRemove={onClickRemove}
                    editId={editId}
                />
            }
        </div>
    )

}

export default Reception