import { ReactElement } from 'react'

interface PokeImageProps {
    url: string
    name: string
}

const PokeImage = ({ url, name }: PokeImageProps): ReactElement => {
    return (
        <>
            <img src={url} alt={name} />
        </>
    )
}

export default PokeImage
