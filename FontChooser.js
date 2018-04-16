class FontChooser extends React.Component {
    constructor(props) {
	super(props);
	
	    if (this.props.size < this.props.max && this.props.size > this.props.min) {
			this.state = {col: 'blue'};
		}
	
		this.state = {isChecked: this.props.bold == 'true', 
					  size: parseInt(this.props.size), 
					  isHidden: true,
					  max: parseInt(this.props.max),
					  min: parseInt(this.props.min),
					  col: 'black'
					  };
    }
    
	toggle() {
		this.setState( {isHidden: !this.state.isHidden});
	}
	
	incClick() {
		if (this.state.size >= this.state.max - 1) {
			this.setState( {col: 'red'});
			if (this.state.size == this.state.max - 1) {
				this.setState( {size: this.state.size + 1});
			}
		} else if (this.state.size == this.state.min) {
			this.setState( {col: 'black'} );
			this.setState( {size: this.state.size + 1});
		}
		else {
			this.setState( {size: this.state.size + 1});
		}
	}
	
	decClick() {
		if (this.state.size == this.state.max) {
			this.setState( {col: 'black'} );
			this.setState( {size: this.state.size - 1});
		} else if (this.state.size == this.state.min + 1) {
			this.setState( {col: 'red'} );
			this.setState( {size: this.state.size - 1});
		} else if (this.state.size == this.state.min) {
			
		} else		
		{
			this.setState( {size: this.state.size - 1});
		}
	}	
	
	doubClicked() {
		this.setState( {size: parseInt(this.props.size)});
		this.setState( {col: 'black'} );
		
	}

	checkToggle() {
		this.setState( {isChecked: !this.state.isChecked });
	}
	
    render() {
		var weight;
		var col = this.state.col;
		var isHidden = this.state.isHidden;
		var fs = this.state.size;
		var isBold = this.state.isChecked;
		if (isBold) {
			weight = 'bold';
		} else {
			weight  = 'normal';
		}
		var inlineStyles = {fontSize: fs, fontWeight : weight, color : col};
	return(
	       <div>
	       <input type="checkbox" id="boldCheckbox" hidden={isHidden} checked={isBold} onChange={this.checkToggle.bind(this)}/>
	       <button id="decreaseButton" hidden={isHidden} onClick={this.decClick.bind(this)}>-</button>
	       <span id="fontSizeSpan" style={inlineStyles} hidden={isHidden} onDoubleClick={this.doubClicked.bind(this)}>{fs}</span>
	       <button id="increaseButton" hidden={isHidden} onClick={this.incClick.bind(this)}>+</button>
	       <span id="textSpan" onClick={this.toggle.bind(this)} style={inlineStyles} >{this.props.text}</span>
	       </div>
	);
    }
}

