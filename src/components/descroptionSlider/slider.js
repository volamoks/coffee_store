import React, { useEffect } from 'react';
import './slider.scss';

const MySlider = () => {
    useEffect(() => {
        slider();
    }, []);

    const slider = (container, options = {}) => {
        const sliderItems = container.querySelectorAll('.slider-item');
        const nextBtn = container.querySelector('.slider-next');
        const prevBtn = container.querySelector('.slider-prev');
        let currentIndex = 0;
        let isTransitioning = false;
        let intervalId;

        // Default options
        const defaults = {
            autoplay: false,
            interval: 5000,
        };

        // Merge user options with defaults
        const settings = Object.assign({}, defaults, options);

        const showItem = index => {
            if (isTransitioning) {
                return;
            }
            isTransitioning = true;
            sliderItems.forEach(item =>
                item.classList.remove('active', 'prev', 'next'),
            );
            if (index < currentIndex) {
                sliderItems[index].classList.add('prev');
            } else if (index > currentIndex) {
                sliderItems[index].classList.add('next');
            }
            sliderItems[index].classList.add('active');
            currentIndex = index;
            isTransitioning = false;
        };

        const next = () => {
            let index = currentIndex + 1;
            if (index > sliderItems.length - 1) {
                index = 0;
            }
            showItem(index);
        };

        const prev = () => {
            let index = currentIndex - 1;
            if (index < 0) {
                index = sliderItems.length - 1;
            }
            showItem(index);
        };

        const startAutoplay = () => {
            intervalId = setInterval(next, settings.interval);
        };

        const stopAutoplay = () => {
            clearInterval(intervalId);
        };

        nextBtn.addEventListener('click', next);
        prevBtn.addEventListener('click', prev);

        if (settings.autoplay) {
            startAutoplay();
            container.addEventListener('mouseenter', stopAutoplay);
            container.addEventListener('mouseleave', startAutoplay);
        }

        showItem(currentIndex);
    };

    // Usage example
    const container = document.querySelector('.slider');
    slider(container, {
        autoplay: true,
        interval: 3000,
    });

    return (
        <div className="slider">
            <div className="slider-item active">Slide 1</div>
            <div className="slider-item">Slide 2</div>
            <div className="slider-item">Slide 3</div>
            <button className="slider-prev">Prev</button>
            <button className="slider-next">Next</button>
        </div>
    );
};

export default MySlider;
