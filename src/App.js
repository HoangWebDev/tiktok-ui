import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function App() {
    return (
        // <Router>
        //     <div className="App">
        //         <Routes>
        //             {publicRoutes.map((route, index) => {
        //                 const Page = route.component;

        //                 let Layout = DefaultLayout;

        //                 if (route.layout) {
        //                     Layout = route.layout;
        //                 } else if (route.layout === null) {
        //                     Layout = Fragment;
        //                 }

        //                 return (
        //                     <Route
        //                         key={index}
        //                         path={route.path}
        //                         element={
        //                             <Layout>
        //                                 <Page />
        //                             </Layout>
        //                         }
        //                     />
        //                 );
        //             })}
        //         </Routes>
        //     </div>
        // </Router>
        <Swiper
            spaceBetween={50}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
            <SwiperSlide>Slide 10</SwiperSlide>
            <SwiperSlide>Slide 11</SwiperSlide>
            <SwiperSlide>Slide 12</SwiperSlide>
            <SwiperSlide>Slide 13</SwiperSlide>
            <SwiperSlide>Slide 14</SwiperSlide>
            ...
        </Swiper>
    );
}

export default App;
