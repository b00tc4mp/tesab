//const { NEXT_PUBLIC_CONTENT_URL } = process.env // WARN destructuring of NEXT_PUBLIC_ env var do not work

function prepareContent() {
    return function(path) {
        return `${process.env.NEXT_PUBLIC_CONTENT_URL}${path}`
    }
}

export default prepareContent