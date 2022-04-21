import * as React from "react"
import {Link} from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const titleStyle = {
  fontSize: "7vw",
}
const contentStyles = {
  width: "100%",
  maxWidth: 900,
}


// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <div style={contentStyles}>
        <h1 style={titleStyle}>Congratulations</h1>
        <p>🎉🎉🎉</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ea hic iure maxime
          natus numquam officia quas quidem sed voluptatum! At earum itaque laboriosam molestiae natus
          pariatur placeat quibusdam reprehenderit. 😎 </p>
        <Link to={'/about'}>About</Link>
        <br/>
        <Link to={'/test'}>Test</Link>
      </div>
    </main>
  )
}

export default IndexPage
