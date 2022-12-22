export default function Slider({ id, children }) {
    return <div id={`${id}`} className="carousel slide relative" data-bs-ride="carousel">
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            {children.map((child, index) => index === 0?
                <button
                    type="button"
                    data-bs-target={`#${id}`}
                    data-bs-slide-to={index}
                    className="active"
                    aria-current="true"
                    aria-label={`Slide ${index + 1}`}
                ></button>
                :
                <button
                    type="button"
                    data-bs-target={`#${id}`}
                    data-bs-slide-to={index}
                    aria-label={`Slide ${index + 1}`}
                ></button>
            )}
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
            {children.map((child, index) => <div className={`carousel-item ${index === 0? 'active' : ''}  relative float-left w-full`}>
                {child}
                {/* <div className="carousel-caption hidden md:block absolute text-center">
                    <h5 className="text-xl">First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div> */}
            </div>)}
        </div>
        <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide="prev"
        >
            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide="next"
        >
            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
}