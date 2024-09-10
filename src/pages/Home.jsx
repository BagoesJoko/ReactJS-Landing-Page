import React from 'react'
import '../styles/Home.css'

import {homeSection} from '../data/HomeSection'
import {courseSection} from '../data/CourseSection'
import {tutorsSection, tutorsList} from '../data/TutorsSection'
import {partnersSection, partnersList} from '../data/PartnersSection'
import {contactSection} from '../data/ContactSection'

import Navbar from '../commponents/Navbar'
import Footer from '../commponents/Footer'
import Turors from '../commponents/Tutors'
import Partners from '../commponents/Partners'
import Contact from '../commponents/Contact'
//pnpm install html-react-parser untuk data content dibaca sebagai html bukan text
import parse from 'html-react-parser'

function Home() {
	return (
		<>
			<Navbar />
			{/*home*/}
			<div className="wrapper">
				<section id="home">
		            <img src={homeSection.image}/>
		            <div className="kolom">
		                {parse(homeSection.content)}
		            </div>
		        </section>
		        {/*online courese	*/}
		        <section id="courses">
		            <div className="kolom">
		                {parse(courseSection.content)}
		            </div>
		            <img src={courseSection.image}/>
		        </section>
		        {/*tutors*/}
		         <section id="tutors">
		            <div className="tengah">
		                <div className="kolom">
		                    {parse(tutorsSection.content)}
		                </div>
		            	<Turors tutorsList={tutorsList}/>
		            </div>
		         </section>
		          <section id="partners">
		            <div className="tengah">
		                <div className="kolom">
		                    {parse(partnersSection.content)}
		                </div>
		                <Partners partnersList={partnersList}/>
		            </div>
		          </section>
			</div>
			<Contact contactSection={contactSection}/>
			<Footer />
		</>
	)
}

export default Home