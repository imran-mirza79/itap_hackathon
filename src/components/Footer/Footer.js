import React from 'react'
import './Footer'
const Footer = () => {
    return (
        <div className='container-fluid '>

            <div className='card-body text-white bg-dark  '>
                <h4 className='footer d-flex'>© Wall Street Crashers,pvt</h4>

                <div className='col d-flex justify-content-start'>
                    <ul>
                        <li className='footer-item d-flex pb-2'>Contact:+123 456 789</li>
                        <li className='footer-item d-flex'>Mail: wallstreetcrashers@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
