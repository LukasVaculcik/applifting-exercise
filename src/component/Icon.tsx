import { IconProps } from "../types"

export default function Icon({ id, width, height }: IconProps) {
    return (
        <svg width={width} height={height}>
            <use href={`/sprite.svg#${id}`} />
        </svg>
    )
}
