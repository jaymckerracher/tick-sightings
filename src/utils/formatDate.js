export default function formatDate(dateStr) {
    const dateOnly = dateStr.split("T")[0]
    const dateComponents = dateOnly.split("-")

    let dateMonth;
    switch(dateComponents[1]) {
        case '01':
            dateMonth = 'Jan';
            break;
        case '02':
            dateMonth = 'Feb';
            break;
        case '03':
            dateMonth = 'Mar';
            break;
        case '04':
            dateMonth = 'Apr';
            break;
        case '05':
            dateMonth = 'May';
            break;
        case '06':
            dateMonth = 'Jun';
            break;
        case '07':
            dateMonth = 'Jul';
            break;
        case '08':
            dateMonth = 'Aug';
            break;
        case '09':
            dateMonth = 'Sep';
            break;
        case '10':
            dateMonth = 'Oct';
            break;
        case '11':
            dateMonth = 'Nov';
            break;
        case '12':
            dateMonth = 'Dec';
            break;
        default:
            dateMonth = '';
    }

    return `${dateComponents[2]} ${dateMonth} ${dateComponents[0]}`
}