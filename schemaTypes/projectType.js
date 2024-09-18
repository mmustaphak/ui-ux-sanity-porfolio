import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'event',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'projectName',
      type: 'string',
      validation: (rule) => rule.required().error("A title is required"),
    }),
    defineField({
      name: 'projectImage',
      type: 'image',
      validation: (rule) => rule.required().error("An Image is required"),
    }),
    defineField({
      name: 'projectLink',
      type: 'url',
      validation: (rule) => rule.required().error("A link is required"),
    }),
  ],
})
