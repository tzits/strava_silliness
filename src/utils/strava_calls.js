export const fetchActvities = async() => {
    let distances = []
    let accessToken = await getToken()
    const response = await fetch(
        `https://www.strava.com/api/v3/athlete/activities?access_token=${accessToken}`
    )
    const data = await(response.json())
    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "Run") {
            let activity = data[i]
            let miles = (Math.round(activity.distance/16)/100).toFixed(2) + ' miles'
            let standingTime = activity.elapsed_time - activity.moving_time
            if (standingTime > 59) {
                standingTime = (Math.round(standingTime/60 * 100)/100).toFixed(2) + ' mins'
            } else {
                standingTime = standingTime + ' secs'
            }
            let date = activity.start_date.substring(0,10)
            distances.push(
                {
                    title: activity.name,
                    date: date,
                    distance: miles,
                    wastedTime: standingTime
                }
            )
        }
    }
    return distances

}

const getToken = async() => {
    const response = await fetch(
        `https://www.strava.com/oauth/token?client_id=${client_id}&client_secret=${client_secret}&refresh_token=${refreshToken}&grant_type=refresh_token`, {method: 'POST'}
    )
    const token = await (response.json())
    return token.access_token
}

fetchActvities()
