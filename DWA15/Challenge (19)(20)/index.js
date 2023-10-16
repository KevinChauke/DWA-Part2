/**
Challenge: 

- Move the `header` element from Page into 
  its own component called "Header"


Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."


Challenge (LR20)

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"

  - Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
*/


import React from "react"
import ReactDOM from "react-dom"

function Page() {
    return (
        <div>
            <header>
                <nav className="nav">
                    <img src="./react-logo.png" className="nav-logo" />
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be
                    able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                    if I know React</li>
            </ol>
            <footer>
                <small>© 2021 Chauke development. All rights reserved.</small>
            </footer>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))