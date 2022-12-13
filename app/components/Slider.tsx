import { useRef } from 'react'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'


export default function ({ children }) {
    const content = useRef()

    const slideWith = 500
    const slideCount = children.length
    let position = 0

    const handleForward = () => {
        if (position < slideWith * (slideCount - 1)) {
            position += slideWith
            content.current.style.transform =`translateX(-${position}px)`
        }
    }

    const handleBackward = () => {
        if (position > 0) {
            position -= slideWith
            content.current.style.transform =`translateX(-${position}px)`
        }
    }

    return <div className="w-[500px] relative">
        <button  className="absolute z-10 top-40 left-4 bg-amber-400 rounded-full w-10 h-10 hover:bg-amber-300" onClick={handleBackward}><GrFormPrevious size="1.5rem" /></button>

        <div className="w-[500px] overflow-hidden">
            <div className="flex items-center transition-transform duration-1000" ref={content}>
                {children}
            </div>
        </div>

        <button className="absolute z-10 top-40 right-4 bg-amber-400 rounded-full w-10 h-10 hover:bg-amber-300" onClick={handleForward}> <GrFormNext size="1.5rem" /> </button>
    </div>
}