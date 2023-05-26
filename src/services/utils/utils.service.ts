import { floor, random } from 'lodash'
import axios, { AxiosError } from 'axios'

import { avatarColors } from './static.data'

export class Utils {
  static avatarColor() {
    return avatarColors[floor(random(0.9) * avatarColors.length)]
  }

  static generateAvatar(text: string, backgroundColor: string, foregroundColor = 'white') {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    if (!context) {
      return
    }

    canvas.width = 200
    canvas.height = 200

    context.fillStyle = backgroundColor
    context.fillRect(0, 0, canvas.width, canvas.height)

    /* Draw Text */
    context.font = 'normal 80px Roboto, sans-serif'
    context.fillStyle = foregroundColor
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillText(text, canvas.width / 2, canvas.height / 2)

    return canvas.toDataURL('image/png')
  }

  static isAxiosError<T>(error: unknown): error is AxiosError<T> {
    // eslint-disable-next-line import/no-named-as-default-member
    return axios.isAxiosError(error)
  }
}
