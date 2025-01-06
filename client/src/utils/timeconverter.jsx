export default function TimeConverter(time24) {
    let newTime24 = time24.substring(0, 6);
    const [hours, minutes] = newTime24.split(":");
    const period = parseInt(hours) >= 12 ? "PM" : "AM";
    const hours12 = parseInt(hours) % 12 || 12;

    return `${hours12}:${minutes} ${period}`;
}