import { zeroFill } from './text'

const secondsToMinutes = (seconds: number) => {
    const formatTime = (num: number) => {
        return zeroFill(Math.floor(num))
    }
    return `${formatTime(seconds / 60)}:${formatTime(seconds % 60)}`
}

const sleep = (delay: number = 1000, res: unknown = 'done') =>
    new Promise(resolve =>
        setTimeout(() => {
            resolve(res)
        }, delay)
    )

export { secondsToMinutes, sleep }
