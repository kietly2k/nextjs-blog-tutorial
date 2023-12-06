export default function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat('vi-VN', { dateStyle: 'long' }).format(new Date(dateString))
}