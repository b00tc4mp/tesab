import { useRouter } from 'next/router';

function useLiterals(literals) {
    const { locale } = useRouter()

    return literals[locale] || {}
}

export default useLiterals