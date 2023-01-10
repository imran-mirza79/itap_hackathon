import React from 'react'
import img1 from '../trading.jpg'
const Heroes = () => {
    return (
        <div className="container-fluid">
            <div className='row p'>
                <div className='col-6'>
                <h3 calssName="text-center">Stock Analysis</h3>
                <p className='justify-content text-start' >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                </p>


                </div>
                <div className='col-4'>
                    <img src={img1} className='d-flex' width='600' height='300' />

                </div>

            </div>

        </div>
    )
}

export default Heroes
