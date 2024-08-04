import type { Settings } from 'v-slick-carousel'
import nationFlags from '../data/nation-flags'
import { Example, ExampleSlide } from '../types'

const id = 'two-slide-groups-finite'

const name = 'Two Slide Groups Finite'

const settings: Settings = {
  dots: true,
  infinite: false,
  groupsToShow: 2,
  groupsToScroll: 2,
  slidesPerGroup: 1,
  swipe: true,
  ignorePrefersReducedMotion: true
}

const slides: ExampleSlide[] = nationFlags.map((o) => ({
  img: o.img,
  text: o.nation
}))

const example: Example = {
  id,
  name,
  settings,
  slides
}

export default example
