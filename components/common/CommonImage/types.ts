export type CommonImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  /**
   * Image name (found at /public/assets/img/[name].[ext])
   */
  name: string

  /**
   * Image extension
   */
  ext?: string

  /**
   * Image size
   */
  size?: HTMLImageElement['width']
}
