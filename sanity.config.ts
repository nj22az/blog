import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {imageHotspotArrayPlugin} from 'sanity-plugin-hotspot-array'

// Import your schemas
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'theofficeofnilsjohansson',
  title: 'The Office of Nils Johansson',

  projectId: 'hqpjl36z',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Site Settings (Singleton)
            S.listItem()
              .title('Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            // Page Content (Singletons)
            S.listItem()
              .title('Home Page')
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homePage')
              ),
            S.listItem()
              .title('About Page')
              .child(
                S.document()
                  .schemaType('aboutPage')
                  .documentId('aboutPage')
              ),
            S.listItem()
              .title('Contact Page')
              .child(
                S.document()
                  .schemaType('contactPage')
                  .documentId('contactPage')
              ),
            S.divider(),
            // Blog Content
            S.listItem()
              .title('Blog Posts')
              .child(
                S.documentTypeList('post')
                  .title('Blog Posts')
                  .filter('_type == "post"')
              ),
            S.listItem()
              .title('Authors')
              .child(
                S.documentTypeList('author')
                  .title('Authors')
                  .filter('_type == "author"')
              ),
            S.listItem()
              .title('Categories')
              .child(
                S.documentTypeList('category')
                  .title('Categories')
                  .filter('_type == "category"')
              ),
            S.listItem()
              .title('Comments')
              .child(
                S.documentTypeList('comment')
                  .title('Comments')
                  .filter('_type == "comment"')
              ),
          ])
    }),
    visionTool(),
    colorInput(),
    imageHotspotArrayPlugin(),
  ],

  schema: {
    types: schemaTypes,
  },

})