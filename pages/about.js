import Head from 'next/head'
import Section from '../components/section'
import SectionTitle from '../components/sectiontitle'
import {Tween} from 'react-gsap'
import {Controller, Scene} from 'react-scrollmagic'

export default function About() {
    return (
        <>
            <Head>
                <title>About Us</title>
            </Head>
            
            <Section bgcolor="#f4f4f4">
                <SectionTitle textContent="About Page" />
            </Section>
        </>
    )
}