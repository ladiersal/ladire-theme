import React from 'react'

const Arrow = ({ prevSlide, nextSlide }) => {
    return (
        <div className='arrows'>
            <span className="prev" onClick={prevSlide}>
                <i class="ri-arrow-drop-left-line"></i>
            </span>
            <span className='next' onClick={nextSlide}>
                <i class="ri-arrow-drop-right-line"></i>
            </span>
        </div >
    )
}

export default Arrow