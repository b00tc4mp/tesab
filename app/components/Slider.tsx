export default function ({ children }) {
    return <div className="slider">
        <button className="slider-back">back</button>
        <div className="content">
            <div className="inner flex">
                {children}
            </div>
        </div>
        <button className="slider-forw">forw</button>
    </div>
}

// TODO learn useRef() for DOM direct manipulation

