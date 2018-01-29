import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Bundle extends Component{
	state = {
		mod: null
	}

 	load(props){
        this.setState({
            mod: null
        });

        props.load().then((mod) => {
            this.setState({
                mod: mod.default ? mod.default : mod
            });
        });        
    }

	componentWillMount(){
		this.load(this.props);
	}

	componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps);
        }
    }	

    render() {
        if(!this.state.mod) return false;

        return this.props.children(this.state.mod);
    }
}

Bundle.propTypes = {
    load: PropTypes.func,
    children: PropTypes.func
};
