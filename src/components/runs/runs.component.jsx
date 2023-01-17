import { fetchActvities } from "../../utils/strava_calls"
import { useEffect, useState } from "react"
import { Container, ListItem } from "../runs.styles"

const Runs = () => {
    const [runs, setRuns] = useState([])

    // useEffect(() => {
    //     const myRuns = async () => {
    //         let data = await fetchActvities()
    //         return data
    //     }
    //     let runData= myRuns()
    //     setRuns([...runData])
    // },[])

    let testArray = [
        {
            date: 1234,
            distance: 10 
        },
        {
            date: 234,
            distance: 10 
        },
        {
            date: 124,
            distance: 10 
        },
        {
            date: 123,
            distance: 10 
        },
        {
            date: 12,
            distance: 10 
        },
    ]


    // let mydata = myRuns()
        return (
            <Container>
                {testArray.map((run) =>  <ListItem key={run.date}>{run.distance}</ListItem>) }
            </Container>
        )
}

export default Runs