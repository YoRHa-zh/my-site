export default function (time, showTime = false) {
    const date = new Date(+time);
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    let result = `${date.getFullYear()}-${month}-${day}`
    if (showTime) {
        const hour = date.getHours().toString().padStart(2, '0');
        const minute = date.getMinutes().toString().padStart(2, '0');
        const second = date.getSeconds().toString().padStart(2, '0');
        result += `${hour}:${minute}:${second}`
    }
    return result
}