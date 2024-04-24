import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'

export default function ProjectCarousel() {

  const projects = [
    {
        id: 1, 
        imageUrl: "/placeholder.svg",
    },
    {
        id: 2, 
        imageUrl: "/placeholder.svg",
    },
    {
        id: 3, 
        imageUrl: "/placeholder.svg",
    },
    {
        id: 4, 
        imageUrl: "/placeholder.svg",
    },
    {
        id: 5, 
        imageUrl: "/placeholder.svg",
    },
  ]

  return (
    <div>
        <Carousel className="w-full overflow-hidden">
            <CarouselContent>
                {projects.map((project, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <img
                            alt={`Project ${project.id}`}
                            src="/placeholder.svg"
                            className="w-full h-full border border-black"
                            height={600}
                            width={400}
                        />
                    </CarouselItem >
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
  )
}
