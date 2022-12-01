import { useRef } from 'react'

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

    return <div>
        <button onClick={handleBackward}>back</button>

        <div className="w-[500px] overflow-hidden">
            <div className="flex items-center transition-transform duration-1000" ref={content}>
                {children}
            </div>
        </div>

        <button onClick={handleForward}>forw</button>
    </div>
}