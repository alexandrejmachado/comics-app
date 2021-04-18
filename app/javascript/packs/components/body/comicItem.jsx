import React from 'react'
import Image from 'images/80TH_POSTER_BOOK-580x870.jpeg'

class ComicItem extends React.Component {

    render() {
        return (
            <div className="comic-item">
                <img className="comic-image" src={Image}/>
                <div className="description-box">
                    <p>Comic Description</p>
                </div>
            </div>
        )
    }

}

export default ComicItem
