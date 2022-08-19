import React from 'react'

const SliderContext = ({ activeIndex, imageSlider }) => {
    return (
        <section>
            <div className="">
                {imageSlider.map((slide, index) => (
                    <div key={index} className={index === activeIndex ? "slide active" : "inactive"}>
                        <div className='slide-wrapper'>
                            <h2 className='slide-title'>{slide.title}</h2>
                            <h3 className='slide-desc'>{slide.desc}</h3>
                            <button className='slide-button'>{slide.button}
                                <i class="ri-arrow-right-circle-line"></i></button>
                        </div>
                        <img className='slide-image' src={slide.urls} alt="slide" />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SliderContext