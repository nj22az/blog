import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import comment from './comment'
import code from './code'
// Singleton content schemas
import siteSettings from './siteSettings'
import homePage from './homePage'
import aboutPage from './aboutPage'
import contactPage from './contactPage'
import hero from './hero'

export const schemaTypes = [
  // Blog content
  post,
  author,
  category,
  comment,
  blockContent,
  code,
  // Site content (singletons)
  siteSettings,
  homePage,
  aboutPage,
  contactPage,
  hero,
]