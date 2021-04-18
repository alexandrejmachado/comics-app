import React from 'react'
import ComicItem from "./comicItem";

class ComicGallery extends React.Component {
    constructor(props) {
        super(props);
    }

    generate_gallery(universe) {
        return universe.map((comic) => {
            return <ComicItem></ComicItem>
        })
    }

    render() {
        return (
            <div className="gallery">
                {this.generate_gallery(this.props.universe)}
            </div>
        )
    }

}

export default ComicGallery
