import '../App.css'

function About() {
    return (
        <>
            <div className="blurb">
                <pre style={{whiteSpace: "pre-line"}}>{`
                    Hello :3
                    I'm ScruffyBrush (aka Nsyse)
                    I'm a self-taught hobbyist SFW furry artist. I like to draw various things so feel free to ask me anything and I'll let you know if I think I can deliver.
                    I think what I draw best though is TTRPG inspired limited palettes pixelart.
                    I'd describe my style as bold and grungy driven by moody contrasts.
                    `}
                    </pre>

                <p>For more examples <a href="https://www.furaffinity.net/user/nsyse" className={"textLink"}>see my Furaffinity</a> or <a href={"https://www.weasyl.com/~nsyse"} className={"textLink"}>my
                    Weasyl</a></p>

                <p>If you want to get a custom made commission reach out on any socials listed at the bottom :D</p>


                <p>I made this website myself, so let me know if you find any bugs or need one too ;)</p>
            </div>
        </>
    )
}

export default About
