import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ReactTabs from './components/tabs.js'
import data from '../data.js'

class App extends Component {
	render() {
		return (
		<div>
			<h1 className="title">React Tabs</h1>
			<ReactTabs data={data}/>
		</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.app'))