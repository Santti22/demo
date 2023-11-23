import React, {useState, useEffect} from "react";
import axios from "axios";

const FeedItems = (indexed) => {
    const connection = 'http://localhost:3001/api/rss-feed'

    const [rssFeed, setRssFeed] = useState([])
    useEffect(() => {
        axios.get(connection)
            .then(response => {
                setRssFeed(response.data.data)
            })
            .catch(error => {
                console.error('Error fetching feed:', error)
            })        
    }, []);

   /**  const date = rssFeed.map(item => new Date(item.pubDate));
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${(date.getFullYear())}`;

    const title = rssFeed.map(item => item.title);
*/
    console.log(rssFeed.pubDate)
    return(
            <div key={indexed}>
                <div>{}</div>
                <div>{}</div>
            </div>
    )
}

export default FeedItems;