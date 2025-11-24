import switchNumToMonth from "./switchNumToMonth";

export default function formatDate(dateStr) {
    const dateOnly = dateStr.split("T")[0]
    const dateComponents = dateOnly.split("-")

    return `${dateComponents[2]} ${switchNumToMonth(dateComponents[1])} ${dateComponents[0]}`
}