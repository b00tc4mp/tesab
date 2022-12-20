import { useRef } from 'react'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'


export default function Slider({ children, width, height }) {
    const content = useRef()

    // @ts-ignore
    const slideCount = children.length
    const slideWidth = parseInt(width)
    const slideHeight = parseInt(height)
    let position = 0

    const handleForward = () => {
        if (position < slideWidth * (slideCount - 1)) {
            position += slideWidth
            content.current.style.transform =`translateX(-${position}px)`
        }
    }

    const handleBackward = () => {
        if (position > 0) {
            position -= slideWidth
            content.current.style.transform =`translateX(-${position}px)`
        }
    }

    return <div className={`relative`} style={{width: `${slideWidth}px`, height: `${slideHeight}px`}}>
        <button  
            className="absolute z-10 top-40 left-4 bg-white/50 rounded-full w-10 h-10 hover:bg-gray-300/75 hover:border-solid hover:border hover:border-gray-100 flex justify-center items-center" 
            onClick={handleBackward}
            style={{top: `${slideHeight/2 - 20}px`}}
        ><GrFormPrevious size="1.5rem" /></button>

        <div className={`overflow-hidden`} style={{width: `${slideWidth}px`, height: `${slideHeight}px`}}>
            <div 
                className={`grid grid-flow-col auto-cols-fr items-center transition-transform duration-1000`} ref={content}
                style={{width: `${slideWidth * slideCount}px`, height: `${slideHeight}px`}}
            >
                {children}
            </div>
        </div>

        <button 
            className="absolute z-10 right-4 bg-white/50 rounded-full w-10 h-10 hover:bg-gray-300/75 hover:border-solid hover:border hover:border-gray-100 flex justify-center items-center" 
            onClick={handleForward}
            style={{top: `${slideHeight/2 - 20}px`}}
        > <GrFormNext size="1.5rem" /> </button>
    </div>
}