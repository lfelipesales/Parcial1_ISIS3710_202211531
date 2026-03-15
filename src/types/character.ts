export interface Character {
  id: string
  name: string
  house: string
  image: string
  gender: string
  wand?: {
    wood: string
    core: string
    length: number
  }
}