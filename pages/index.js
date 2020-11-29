import Head from 'next/head'
import Slideshow from '../components/slideshow' 
import Section from '../components/section'
import SectionTitle from '../components/sectiontitle'
import AnimatedImage from '../components/animatedimage'
import FadeIn from '../components/fadein'

export default function Home() {
    return (
		<>
			<Head>
				<title>Homepage</title>
			</Head>

			<Section customClass="section1" bgcolor="#f4f4f4">
				<SectionTitle textContent="Welcome Home" />

				<div className="row">
					<div className="col-6">
						<FadeIn>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo aspernatur tenetur, dolore hic, odit voluptate aliquid error aperiam, neque atque dolores. Adipisci, ipsum corrupti quam officiis inventore distinctio quas necessitatibus?
						</FadeIn>
					</div>
					<div className="col-6">
						<AnimatedImage />
					</div>
				</div>
			</Section>
			
			<Section bgcolor="#ddd" customClass="section2">
				<SectionTitle textContent="Another Section" />
				<div className="row">
					<div className="col-6">
						<AnimatedImage />
					</div>
					<div className="col-6">
					<FadeIn>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo aspernatur tenetur, dolore hic, odit voluptate aliquid error aperiam, neque atque dolores. Adipisci, ipsum corrupti quam officiis inventore distinctio quas necessitatibus?
						</FadeIn>
					</div>
					
				</div>
			</Section>

			<Section>
				<SectionTitle textContent="Latest Projects" />
				<div className="row">
					<div className="col-6">
						<FadeIn>
						
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo aspernatur tenetur, dolore hic, odit voluptate aliquid error aperiam, neque atque dolores. Adipisci, ipsum corrupti quam officiis inventore distinctio quas necessitatibus?
						</FadeIn>
					</div>
					<div className="col-6">
						<AnimatedImage />
					</div>
				</div>
			</Section>
		</>
    )
}

function countClick(){
	return clicked + 1;
}
