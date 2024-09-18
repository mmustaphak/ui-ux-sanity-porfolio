import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'event',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'ProjectName',
      type: 'string',
    }),
    defineField({
        name: 'testimonial',
        type: 'string'
    })
  ],
})