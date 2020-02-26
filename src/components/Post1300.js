import React from 'react'
import Rainbow from '../hoc/Rainbow'
import building from '../building.jpg'


const Post1300 = (props) => {
    return (
        <div>
            
            <div className="container">
                <h4 className="center">Post-1300</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quia rem atque tenetur laudantium, dolores nam libero voluptas nobis doloremque temporibus aliquid error voluptatibus quae repellendus repudiandae sapiente impedit officia?</p>
                <img src={building} alt="Post-1300 Building" />
            </div>
            
        </div>
    
    )
    
}

export default Rainbow(Post1300)