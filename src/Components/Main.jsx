import Badges from "./Badges"
import Banner from "./Banner"
import Cards from "./Cards"
import Testimonials from "./Testimonials"
import userImage from "../assets/UserImg.png"

export default function Main(){
    return (
        <main>
        <section className="normal-btn">
        <Badges>Button</Badges>
        <Badges color="red">Button</Badges>
        <Badges color="yellow">Button</Badges>
        <Badges color="green">Button</Badges>
        <Badges color="blue">Button</Badges>
        <Badges color="indigo">Button</Badges>
        <Badges color="purple">Button</Badges>
        <Badges color="pink">Button</Badges>
        </section>

        <section className="pill-btn">
        <Badges style="pill">Button</Badges>
        <Badges style="pill" color="red">Button</Badges>
        <Badges style="pill" color="yellow">Button</Badges>
        <Badges style="pill" color="green">Button</Badges>
        <Badges style="pill" color="blue">Button</Badges>
        <Badges style="pill" color="indigo">Button</Badges>
        <Badges style="pill" color="purple">Button</Badges>
        <Badges style="pill" color="pink">Button</Badges>
        </section>

        <section className="banner-with-No-Text">
        <Banner text="Congratulations!" status="success"/>
        <Banner text="Attention" status="warning"/>
        <Banner text="There is a problem with your application" status="error"/>
        <Banner text="Update available"/>
        </section>

        <section className="banner-with-Text">

        <Banner text="Congratulations!" status="success">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
        </Banner>

        <Banner text="Attention" status="warning">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
        </Banner>

        <Banner text="There is a problem with your application" status="error">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
        </Banner>
        
        <Banner text="Update available">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
        </Banner>

        </section>

        <section className="cards">
        <Cards heading="Easy Deployment">
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
        </Cards>
        </section>

        <section className="testimonials">
        <Testimonials name="May Andersons" job="Workcation, CTO" 
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </Testimonials>
        </section>
        
        </main>
    )
}