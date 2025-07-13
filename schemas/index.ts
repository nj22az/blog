import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import comment from './comment'
// Singleton content schemas
import siteSettings from './siteSettings'
import homePage from './homePage'
import aboutPage from './aboutPage'
import contactPage from './contactPage'

export const schemaTypes = [
  // Blog content
  post,
  author,
  category,
  comment,
  blockContent,
  // Site content (singletons)
  siteSettings,
  homePage,
  aboutPage,
  contactPage,
]