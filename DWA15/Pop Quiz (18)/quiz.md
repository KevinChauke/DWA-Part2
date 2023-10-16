Quiz!

1. What is a React component?
A function that returns React elements. (UI)

2. What's wrong with this code?
```
The function name must be written in pascal case, It must start with a capital letter.

function MyComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

3. What's wrong with this code?
```
Needs (< />) when calling the heather

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(<Header />, document.getElementById("root"))
```
