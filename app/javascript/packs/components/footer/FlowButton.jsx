import React from 'react'

class FlowButton extends React.Component {
    constructor(props) {
        super(props);
    }

    text = {
        "next": "Proxima Pagina",
        "prev": "Pagina Anterior",
    }
    render() {
        return (
            <div className="pagination-button">
                <p>
                    {this.text[this.props.type]}
                </p>
            </div>
        )
    }

}

export default FlowButton
