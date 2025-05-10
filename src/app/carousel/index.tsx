import React from 'react';
import LogoCarousel from './Carousel';
import {CAROUSEL_TECHNOS} from '@/constants/technos';

const HomePage: React.FC = () => {
    return (
        <div>
            <LogoCarousel logos={CAROUSEL_TECHNOS}/>
        </div>
    );
};

export default HomePage;
