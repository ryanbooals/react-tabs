import React, {Component} from 'react'
import _ from 'lodash'


class ReactTabs extends Component {
	constructor(props) {
		super(props)
		this.state = {
			activeIndex: 0,
		}
	}

	setActive(i) {
		console.log(i)
		this.setState({activeIndex: i})
	}

	getTabs() {
		const width = 100/this.props.data.tabs.length
		const tabs = this.props.data.tabs.map((tab, i)=> {
			const onClick = this.setActive.bind(this, i)
			let tabClass = 'tab'
			if (i === this.state.activeIndex) {
				console.log('true')
				tabClass+= ' active'
			}
			return (
				<li 
					key={i}
					className={tabClass}
					style={{width: width + '%'}}
					onClick={onClick}
				>
					{tab.header}
				</li>
			)
		})
		console.log(this.props.data.tabs)
		return (
			<ul className="tabs">
				{tabs}
			</ul>
		)
	}

	getContent() {
		return this.props.data.tabs[this.state.activeIndex].content
	}

	render() {
		return (
			<div className="tab-container">
				{this.getTabs()}
				<div className="tab-content">
					{this.getContent()}
				</div>
			</div>
		)
	}
}

export default ReactTabs
