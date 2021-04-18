import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './header/NavBar'
import ComicGallery from "./body/comicGallery"
import Pagination from "./footer/pagination";
class ComicsApp extends React.Component {

    universe=Array.from(Array(30).keys())
    render() {
        return (
            <div>
                <Navbar/>
                <ComicGallery universe={this.universe}/>
                <Pagination/>

            </div>
        )
    }
}

document.addEventListener('turbolinks:load', () => {
    const app = document.getElementById('comics-base')
    app && ReactDOM.render(<ComicsApp />, app)
})