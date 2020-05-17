import React from 'react'
import ReactDOM from 'react-dom'

type FiltersProps = {
    order: string,
    theme: {
        currentTheme: string
    }
}

class Filters extends React.Component<FiltersProps, {}> {
    render() {
        return (
            <div className="t-filters">
                <h3>Filters</h3>
                <p>Current order: {this.props.order}</p>
                <p>Current theme: {this.props.theme.currentTheme}</p>
            </div>
        )
    }
}

export default Filters