export default function switchNumToMonth(num) {
    let month;
    switch(num) {
        case 1:
        case '01':
            month = 'Jan';
            break;
        case 2:
        case '02':
            month = 'Feb';
            break;
        case 3:
        case '03':
            month = 'Mar';
            break;
        case 4:
        case '04':
            month = 'Apr';
            break;
        case 5:
        case '05':
            month = 'May';
            break;
        case 6:
        case '06':
            month = 'Jun';
            break;
        case 7:
        case '07':
            month = 'Jul';
            break;
        case 8:
        case '08':
            month = 'Aug';
            break;
        case 9:
        case '09':
            month = 'Sep';
            break;
        case 10:
        case '10':
            month = 'Oct';
            break;
        case 11:
        case '11':
            month = 'Nov';
            break;
        case 12:
        case '12':
            month = 'Dec';
            break;
        default:
            month = '';
    }

    return month
}