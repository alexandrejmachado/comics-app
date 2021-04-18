import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './header/NavBar'

class ComicsApp extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <ComicGallery/>
            </div>
        )
    }
}

document.addEventListener('turbolinks:load', () => {
    const app = document.getElementById('comics-base')
    app && ReactDOM.render(<ComicsApp />, app)
})