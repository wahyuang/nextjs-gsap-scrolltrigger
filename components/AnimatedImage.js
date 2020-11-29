import '../styles/AnimatedImage.scss'
import {useRef, useEffect} from 'react'
import {Power3, gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

export default function AnimatedImage(){
    gsap.registerPlugin(ScrollTrigger);

    const overlay = useRef(null)
    const image = useRef(null)
    const imageWrapper = useRef(null)

    useEffect(() => {
        const timeline = gsap.timeline({scrollTrigger: {
            trigger: imageWrapper.current,
            markers: false,
            once: false,
            toggleActions:'restart none none reset',
            start: "top 90%"
        }})

        timeline.to(
            overlay.current, {
                width: '100%',
                duration: 0.7
            }
        ).fromTo(
            image.current, {
                autoAlpha: 0,
                scale: 1.6
            },{
                autoAlpha: 1,
                scale: 1,
                duration: 2
            }
        ).to(
            overlay.current, {
                width: '0%',
                duration: 1.2,
                delay: 0,
                ease: Power3.easeOut
            }, '-=1.7'
        )
    })

    return (
        <div className="animated-image__wrapper" ref={imageWrapper}>
            <div className="animated-image__overlay" ref={overlay}></div>
            <img className="animated-image__image" src="images/slide-1.jpg" ref={image} />
        </div>
    )
}