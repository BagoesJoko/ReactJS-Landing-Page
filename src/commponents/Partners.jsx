import '../styles/Partners.css'

function Partners(props) {
	return (

				<div className="partner-list">
                    {
                    	props.partnersList.map((item, index) =>{
                    	return(
                    		<div className="kartu-partner">
                    			<img src={item.image}/>
	                    	</div>
                    	)
                    	})

                	}
                        
                </div>
	)
}

export default Partners