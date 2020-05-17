import React from 'react'
import ReactDOM from 'react-dom'


import Header from '../components/header'
import Footer from '../components/footer'
import Navigation from '../components/navigation'
import JSXCounter from '../components/counter-jsx'
import Counter from '../components/counter'
import Weekend from '../components/weekend'
import Filters from '../components/filters'
import data from '../data'

interface Props {
}
  
class App extends React.Component<Props, {}> {
    render() {
      return (<React.Fragment>
        <h1>React component examples with TypeScript</h1>
        {/* Normal functional component example */}
        <Header userName="John Smith" email="j@smith.com"/>

        {/* Handle array of objects and object */}
        <Navigation links={data.navigation.links}/>

        <Filters order={data.options.order} theme={data.options.theme} />

        {/* useState example*/}
        <Counter />

        {/* Normal JSX example */}
        <JSXCounter />
        
        {/* Handling Array */}
        <Weekend items={data.weekend}/>

        {/* Function component example */}
        <Footer cLink="https://www.typescript.com/" totalVisits={5000}/>
      </React.Fragment>)
    }
}

export default App
