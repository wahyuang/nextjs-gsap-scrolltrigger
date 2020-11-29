import {useEffect, useRef} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

export default function FadeIn({children}){
    gsap.registerPlugin(ScrollTrigger)
    const wrapper = useRef(null)

    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: wrapper.current,
                markers: false,
                once: false,
                toggleActions:'restart none none reverse',
                start: "top 70%"
            }
        });

        timeline.to(
            wrapper.current, {
                autoAlpha: 1,
                duration: 1.2
            }
        )
    })

    return (
        <div className="fade-in__wrapper" ref={wrapper}>
            {children}
        </div>
    )
}