import { defineType, defineField } from "sanity";

export const testimonialType = defineType({
    name:'testimonial',
    type:'document',
    fields: [
        defineField({
            name:'Name',
            type:'string',
            validation: rule => rule.required().error("A value is required")
        }),
        defineField({
            name:"message",
            type:"string",
            validation: rule => rule.required().error("A value is required")
        })
    ]
})