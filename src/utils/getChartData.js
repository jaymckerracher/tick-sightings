import switchNumToMonth from "./switchNumToMonth"

export default function getChartData(data) {
    const datesObj = {}

    let startDateString = data[0].date.split("T")[0].split("-").slice(0, 2)
    const startDate = [Number(startDateString[0]), Number(startDateString[1])]

    let endDateString = data[data.length - 1].date.split("T")[0].split("-").slice(0, 2)
    const endDate = [Number(endDateString[0]), Number(endDateString[1])]
    
    if (startDate[0] === endDate[0]) {
        for (let i=startDate[1]; i<=endDate[1]; i++) {
            const month = switchNumToMonth(i)
            datesObj[`${month} '${startDate[0].toString().substring(2)}`] = 0
        }
    }
    else {
        for (let i=startDate[0]; i<=endDate[0]; i++) {
            if (i === startDate[0]) {
                for (let j=startDate[1]; j<=12; j++) {
                    const month = switchNumToMonth(j)
                    datesObj[`${month} '${i.toString().substring(2)}`] = 0
                }
            }
            else if (i === endDate[0]) {
                for (let j=1; j<=endDate[1]; j++) {
                    const month = switchNumToMonth(j)

                    datesObj[`${month} '${i.toString().substring(2)}`] = 0
                }
            } else {
                for (let j=1; j<=12; j++) {
                    const month = switchNumToMonth(j)
                    datesObj[`${month} '${i.toString().substring(2)}`] = 0
                }
            }
        }
    }

    for(let i=0; i<data.length; i++) {
        const dataObj = data[i]
        const dateArr = dataObj.date.split("T")[0].split("-").slice(0, 2)
        const month = switchNumToMonth(dateArr[1])
        const formattedDate = `${month} '${dateArr[0].toString().substring(2)}`
        datesObj[formattedDate] ++;
    }

    return datesObj
}