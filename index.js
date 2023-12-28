const App = () => {
    return React.createElement(
        "div",
        {
            "id": "main"
        },
        React.createElement(Header), 
        React.createElement(About)        
    )
  };
  

  const Header = () => {
    return React.createElement(
        "div",
        {
            "id": "header"
        },
        React.createElement("h1", {}, "Welcome to Basic React App")        
    )
  }

  const About = () => {
    return React.createElement (
        "div",
        {
            "id": "about"
        },
        React.createElement("h2", {}, "About Me"),
        React.createElement("div", {
            "id": "about-me"
        }, 

        React.createElement("p", {}, "My name is Ajay Dhangar!")
        
        )
    )
  }

const root = document.getElementById("root");
const content = ReactDOM.createRoot(root);
content.render(React.createElement(App))