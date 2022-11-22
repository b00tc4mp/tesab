import { Bakbak_One } from '@next/font/google'

const bakbakOne = Bakbak_One({ weight: '400', subsets: ['latin'] })

function useFonts() {
    return { bakbakOne }
}

export default useFonts