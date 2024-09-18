import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'event',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'projectName',
      type: 'string',
    }),
    defineField({
        name: "projectImage",
        type: 'image',
    }),
    defineField({
        name:'projectLink',
        type:'url'
    })
  ],
})