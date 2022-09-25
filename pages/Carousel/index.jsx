// import React, { Component } from "react";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// class Index extends Component {
//     render() {
//         const settings = {
//             arrows: true,
//             // dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//         };
//         return (
//             <div>
//                 <h2> Single Item</h2>
//                 <Slider {...settings}>
//                     <div>
//                         <h3
//                             style={{
//                                 height: "500px",
//                                 width: "50vw",
//                                 background: "red",
//                             }}
//                         >
//                             6
//                         </h3>
//                     </div>
//                     <div>
//                         <h3
//                             style={{
//                                 height: "500px",
//                                 width: "50vw",
//                                 background: "red",
//                             }}
//                         >
//                             6
//                         </h3>
//                     </div>
//                     <div>
//                         <h3
//                             style={{
//                                 height: "500px",
//                                 width: "50vw",
//                                 background: "red",
//                             }}
//                         >
//                             6
//                         </h3>
//                     </div>
//                     <div>
//                         <h3
//                             style={{
//                                 height: "500px",
//                                 width: "50vw",
//                                 background: "red",
//                             }}
//                         >
//                             6
//                         </h3>
//                     </div>
//                 </Slider>
//             </div>
//         );
//     }
// }

// export default Index;

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Index = () => {
    return (
        <div>
            <h1>maasdsuk</h1>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024,
                        },
                        items: 3,
                        partialVisibilityGutter: 40,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0,
                        },
                        items: 1,
                        partialVisibilityGutter: 30,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464,
                        },
                        items: 2,
                        partialVisibilityGutter: 30,
                    },
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <div>
                    <h1>maasdsuk</h1>
                </div>
                <div>
                    <h1>asdmasuk</h1>
                </div>
                <div>
                    <h1>masuasdk</h1>
                </div>
                <div>
                    <h1>maasdsuk</h1>
                </div>
                <div>
                    <h1>masasduk</h1>
                </div>
            </Carousel>
        </div>
    );
};

export default Index;
