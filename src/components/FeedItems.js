import React, {useState, useEffect} from "react";
import axios from "axios";

const FeedItems = ({indexed}) => {
    const connection = 'http://localhost:3001/api/rss-feed'

    const [rssFeed, setRssFeed] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(connection)
            .then(response => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(response.data.data, 'text/xml');
                const items = xmlDoc.querySelectorAll('item');
                const parsedItems = Array.from(items).map((item) => {
                    return {
                        title: item.querySelector('title').textContent,
                        date: new Date(item.querySelector('pubDate').textContent),
                    }
                })
                setRssFeed(parsedItems)
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching feed:', error)
                setLoading(false)
            })        
    }, []);
    
    if (loading) {
        return <div>Loading...</div>
    }
    if (rssFeed.length === 0 || indexed >= rssFeed.length) {
        console.error(`Empty data: ${indexed}`)
        return <div>Empty data</div>
    }
    console.log(rssFeed[0], rssFeed[1])
    const formattedDate = rssFeed[indexed].date.toLocaleDateString('en-GB');
    return(
            <div key={indexed}>
                <div>{formattedDate}</div>
                <div>{rssFeed[indexed].title}</div>
            </div>
    )
}

export default FeedItems;