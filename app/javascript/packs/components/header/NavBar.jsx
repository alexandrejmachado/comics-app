import React from 'react'
import Image from 'images/marvel-logo-4.png'

class NavBar extends React.Component {

    render() {
        return (
           <div className="marvel-bar">
               <div className="bar-items">
                    <img className="marvel-logo" src={Image}></img>
                  <input type="text" className="input-hero" placeholder="Search by Superhero!"
                  aria-describedby="addon-wrapping"/>
              </div>
           </div>
    )
    }

}

export default NavBar