
export default {
	changeBtnState() {
        this.btnState = !this.btnState;
    },
    change() {
    	this.$validator.validate().then( response => {

    		if ( response ) return false;

    		console.log( this.name );
    	})
    },
    addName() {

    },
    getData() {
    	let url = this.domain + "/api/transactions";
    	let data= {
    		params: { 
    			address: "0x7f9d6949d7663f8adc3defc3b24fb863bdd780b7" 
    		}
    	}	
      this.$http.get( url, data ).then( response => {
      		console.log( response );
      		let body = response.body;
      		console.log( body );
      }).catch( err => {});
    },
    testPostMethod() {
    	let url  = this.domain + "/api/your-sharks";
	    let data = {
	     	player_address: "0x7f9d6949d7663f8adc3defc3b24fb863bdd780b7"
	    };
	    let config = {
	    	emulateJSON: true,
	    }
    	this.$http.post( url, data, config ).then( response => {

    		if ( response.ok === false ) return false;
	      	if ( response.body.code !== "SUCCESS" ) return false;

	      	let data = response.body.data; 
	      	
	      	console.log( data );
	    }).catch( err => {
	      	console.log( err );
	    });	
    },
    checkboxChange() {
    	alert( this.checked )
    }
}