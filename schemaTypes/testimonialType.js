import { defineType, defineField } from "sanity";

export const testimonialType = defineType({
    name:'testimonial',
    type:'document',
    fields: [
        defineField({
            name:'Name',
            type:'string',
        }),
        defineField({
            name:"message",
            type:"string"
        })
    ]
})