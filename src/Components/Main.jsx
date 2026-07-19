import Badges from "./Badges";
import Banner from "./Banner"
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

        <section className="banner-section">
            <Banner text="Congratulations!"/>
        </section>
        </main>
    )
}