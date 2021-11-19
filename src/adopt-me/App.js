/* global React  ReactDOM*/

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, { name: "Fly", animal: "Dog", breed: "Terrier" }),
    React.createElement(Pet, {
      name: "Gidget",
      animal: "Cat",
      breed: "Short-hair",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
