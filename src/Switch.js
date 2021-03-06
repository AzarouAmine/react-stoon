import React from 'react';

export default class Switch extends React.Component {	
	render() {
		const props  = this.props;
		const { $, target, children = [] } = props;
		const Cases = React.Children.map(
			children,
			child => React.cloneElement(child, { target: target })
		);
		return (
			<$ {...props}>
				{Cases}
			</$>
		);
	}

	static Case(props) {
		const { $, value, target, children } = props;
		if(target === value) {
			return (
				<$ {...props}>
					{children}
				</$>
			);
		} else {
			return null;
		}
	}
}
