export const medics = [
    '',
    'Крутой Шрек Огрович',
    'Милос Рикардо Вольфрамович',
    'Уик Джон Константинович',
    'Борецкий Стас Григорьевич',
    'Джонсон Скала Владимировна'
]

export const sortArr = [
    { key: "none", name: "" },
    { key: "name", name: "Имя" },
    { key: "doctor", name: "Врач" },
    { key: "date", name: "Дата" },
]

export const sortBy = [
    {key: "up", name: "По возрастанию"},
    {key: "down", name: "По убыванию"}
  ]


          // let startExactDate = moment(startDate).format('YYYY-MM-DD');
        // let endExactDate = moment(endDate).format('YYYY-MM-DD');

        // moment(item.date).isBetween(startExactDate, endExactDate)
        //         || moment(moment(item.date).format('YYYY-MM-DD')).isSame(startExactDate) || moment(moment(item.date).format('YYYY-MM-DD')).isSame(endExactDate)

        // if(endDate >= item.date && startDate <= item.date){
        //     return item
        // }