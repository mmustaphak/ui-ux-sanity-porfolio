import { defineType, defineField } from "sanity";
import {EnvelopeIcon} from '@sanity/icons'

export const testimonialType = defineType({
    name:'testimonial',
    type:'document',
    icon: EnvelopeIcon,
    fields: [
        defineField({
            name:'name',
            type:'string',
            validation: rule => rule.required().error("A value is required")
        }),
        defineField({
            name:"message",
            type:"string",
            validation: rule => rule.required().error("A value is required")
        })
    ],
})