export interface category {
    svgUrl: string,
    title: string,
    number: number
}

export interface Job {
    title: string,
    type: string,
    experience: string,
    salary: number | string,
    logo: string,
    company: string,
    location: string,
}

export interface Testimonial {
    photo: string,
    title: string,
    description: string
}