import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'hotel-cms',

  projectId: 'pjek0hua',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  basePath: "/studio",

  schema: {
    types: schemaTypes,
  },
})
