<script type="text/jsx">
		var MyComponent =  React.createClass({
			render : function () {
				return <div>
                    <h1>{this.props.text}    </h1>
                    <p> {this.props.children}</p>
                </div>;
			}
		});

        React.render( <div>
            <MyComponent text="helloWorld" >
                This is helloWorld</MyComponent> 
            <MyComponent text="How are you!" >
                This is How are you!</MyComponent>
            <MyComponent text="goodbye" >
                This is goodbye</MyComponent> 
            </div> ,document.getElementById('react-container'));
	</script>