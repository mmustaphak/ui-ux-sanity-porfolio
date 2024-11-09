import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'UI/UX Portfolio',

  projectId: 'p1zjsjf8',
  dataset: 'production',

  //visionTool() goes here
  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
