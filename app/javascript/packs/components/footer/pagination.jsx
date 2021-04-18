import React from 'react'
import FlowButton from "./FlowButton";

class Pagination extends React.Component {

    render() {
        return (
            <div className="pagination">
                <FlowButton type="prev" ></FlowButton>
                <FlowButton type="next" ></FlowButton>
            </div>
        )
    }

}

export default Pagination
