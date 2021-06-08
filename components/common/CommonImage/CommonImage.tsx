import { resolveImagePath } from '../../../utils/resolve'
import { CommonImageProps } from './types'

/**
 * Wrapper around `Image` next component
 */
const CommonImage: React.FC<CommonImageProps> = ({
  name,
  ext = 'png',
  size = 'auto',
  width = size,
  height = size,
  ...imgProps
}) => {
  return (
    <img
      src={resolveImagePath(name, false, ext)}
      srcSet={`${resolveImagePath(name, true, ext)} 2x`}
      width={width}
      height={height}
      {...imgProps}
    />
  )
}

export default CommonImage
