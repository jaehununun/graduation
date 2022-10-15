export const timeMaker = (time) => {
    const now = new Date().getTime()
    if (now - time < 60000) {
        return '방금 전'
    }
    if (now - time < 3600000) {
        return `${parseInt((now - time) / 60000)}분 전`
    }
    if (now - time < 86400000) {
        return `${parseInt((now - time) / 3600000)} 시간 전`
    }
    return `${new Date(time).getFullYear()}년 ${new Date(time).getMonth()}월 ${new Date(time).getDate()}일 ${new Date(time).getHours()}:${new Date(time).getMinutes()}`
}