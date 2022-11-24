const { NEXT_PUBLIC_CONTENT_URL } = process.env

function useContent() {
    return function(path) {
        return `${NEXT_PUBLIC_CONTENT_URL}${path}`
    }
}

export default useContent