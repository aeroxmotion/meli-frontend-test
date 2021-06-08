import config from '../config'

export enum MeLiImageType {
  thumbnail = 'AB',
  picture = 'O',
  highDensity = 'F'
}

/**
 * Resuelve la ruta de la imagen
 *
 * @param name
 * @param highDensity
 * @param ext
 */
export const resolveImagePath = (
  name: string,
  highDensity: boolean,
  ext: string = 'png'
) => `${config.images.RESOLVE_PATH}/${name}${highDensity ? '@2x' : ''}.${ext}`

/**
 * Resuelve la URL de la imagen alojada en MercadoLibre
 *
 * NOTA: Adicionalmente aplica heurísticas basadas en el parámetro `type`
 * dado, para resolver la imagen con las dimensiones y
 * calidad adecuadas, añadiendo también soporte para dispositivos
 * con un "alta densidad de pixeles"
 */
export const resolveMeLiImageURL = (
  originalURL: string,
  type: MeLiImageType
) => {
  return originalURL.replace(/\/([^/]+)/g, (_, filepath) => {
    if (type === MeLiImageType.highDensity) {
      filepath = filepath.replace(/^D_/, '$&2X_')
    }

    return `/${filepath.replace(/[A-Z]\.\w+$/, `${type}.webp`)}`
  })
}
