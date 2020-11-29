import '../styles/SectionTitle.scss'
import {useRef, useEffect, useState} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

export default function SectionTitle({textContent}){
    gsap.registerPlugin(ScrollTrigger);

    const textHeading = textContent.split(' ')
    const headingSection = useRef(null)
    const animateWord = useRef([])

    useEffect(() => {
        const timeline = gsap.timeline({scrollTrigger: {
            trigger: headingSection.current,
            markers: false,
            once: false,
            toggleActions:'restart none none reverse',
            start: "top 70%"
        }})
        
        timeline.to(
            headingSection.current,{
                autoAlpha: 1
            }
        ).from(
            animateWord.current,{
                y: '100%'
            },
            '-=0.3'
        )
    })

    return (
        <div className="heading-section__wrapper" ref={headingSection}>
            {textHeading.map((value, index) => {
                return (
                    <div className="heading-section__item" key={value}>
                        <span ref={(el) => {animateWord.current.push(el)}}>{value}</span>
                    </div>
                )
            })}
        </div> 
    )

}