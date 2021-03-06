import React from "react"
import "./About.css"
import Hermann from "./images/HermannRorschach.jpeg"
import Hermann2 from "./images/rorschach_2.jpeg"

const About = () => {
    return (
        <>
        <div className = "about-title">
            <h1>What is the Rorschach Inkblot Test?</h1>
        </div>
        <div className= "about-container">    
        <img className= "herman" src={Hermann} alt="Hermann" />
        <p><span className="bold">The Rorschach test</span> (pronounced “ROAR-shock”), also called Rorschach inkblot test, is a projective method of psychological testing in which a person 
        is asked to describe what he or she sees in <span className="bold">10 inkblots</span>, of which some are black or gray and others have patches of color. The test was introduced in 1921 
        by Swiss psychiatrist <span className="bold">Hermann Rorschach</span>. It attained peak popularity in the 1960s, when it was widely used to assess cognition and personality and to diagnosis 
        certain psychological conditions. 
        <br></br>&nbsp;&nbsp;&nbsp;Responses to the Rorschach test are typically scored on the basis of the location in the blot of the thing seen, the kind of stimulus characteristic emphasized, and 
        the content of the percept. From response scores, the psychologist attempts to describe the subject’s personality, often by comparing scores with established norms.
        <br></br>&nbsp;&nbsp;&nbsp;The history states that one of Hermann's favorite games, when he was a child, was called <span className="bold">Klecksography</span>, which involved creating inkblots and creating stories or poems 
        about them. He thoroughly enjoyed the game so much that his school friends nicknamed him Klecks, the German word for inkblot. His interest in inkblots continued into adulthood. While working in a psychiatric hospital, Rorschach 
        noticed that patients with schizophrenia responded to the blots differently from patients with other diagnoses. He began wondering if inkblots could be used to create profiles for different mental disorders. So, inspired perhaps by 
        both his favorite childhood game and his studies of <span className="bold">Sigmund Freud's dream symbolism</span>, Rorschach developed a systematic approach to using inkblots as an assessment tool.
        <br></br>&nbsp;&nbsp;&nbsp;The Rorschach is what psychologists call a projective test. The basic idea of this is that when a person is shown an ambiguous, meaningless image (ie an inkblot) the mind will work hard at imposing meaning 
        on the image. That meaning is generated by the mind.
        </p>
        <p className = "side-paragraph"> The Rorschach test has grown to be one of the most popularly used psychological tests. It's primarily used in psychotherapy and counseling.
            Those who use it regularly do so as a way of obtaining a great deal of qualitative information about a person, including their personality, emotional functioning, and thinking patterns. The therapist and 
            client can then further explore some of these issues during therapy.
           <br></br>&nbsp;&nbsp;&nbsp;Interpreting a Rorschach record is a complex process. It requires a wealth of knowledge concerning personality dynamics generally as well as considerable experience with the Rorschach method specifically. 
            In addition to formal scores, Rorschach interpretation is also based on behaviors expressed during the testing, patterns of scores across responses, unique or consistent themes in the responses, and unique or idiosyncratic perceptions.
        </p>
        <img className= "herman2" src={Hermann2} alt="Hermann2" />

        </div>
        </>
    )
}

  export default About;


