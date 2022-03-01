import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  Handler = (action, newObject) => {
    switch (action) {
      case "ADD_PROJECT":
        this.setState({
          projects: [newObject, ...this.state.projects],
        });
        break;
      case "ADD_RECOMMENDATION":
        this.setState({
          recommendations: [newObject, ...this.state.recommendations],
        });
        break;
    }
  };

  state = {
    Handler: this.Handler,
    projects: [
      {
        id: 1,
        title: "Project 1",
        excerpt: "This is my project about...",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
        body: 1,
      },
      {
        id: 2,
        title: "Project 2",
        excerpt: "This is my project about...",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
        body: 2,
      },
      {
        id: 3,
        title: "Project 3",
        excerpt: "This is my project about...",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
        body: 3,
      },
      {
        id: 4,
        title: "Project 4",
        excerpt: "This is my project about...",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
        body: 4,
      },
    ],
    skills: [
      // {
      //   id: 1,
      //   name: "HTML5",
      //   imageUrl:
      //     "https://storage.googleapis.com/unschool-portfolio-website/html5.png",
      //   starsTotal: 3,
      //   starsActive: 2,
      // },
      // {
      //   id: 2,
      //   name: "CSS",
      //   imageUrl:
      //     "https://storage.googleapis.com/unschool-portfolio-website/css3.png",
      //   starsTotal: 3,
      //   starsActive: 3,
      // },
      // {
      //   id: 3,
      //   name: "JS",
      //   imageUrl:
      //     "https://storage.googleapis.com/unschool-portfolio-website/javascript.png",
      //   starsTotal: 3,
      //   starsActive: 1,
      // },
      // {
      //   id: 4,
      //   name: "Bootstrap 4/5",
      //   imageUrl:
      //     "https://storage.googleapis.com/unschool-portfolio-website/bootstrap4.png",
      //   starsTotal: 3,
      //   starsActive: 3,
      // },
      // {
      //   id: 5,
      //   name: "React",
      //   imageUrl:
      //     "https://storage.googleapis.com/unschool-portfolio-website/react.png",
      //   starsTotal: 3,
      //   starsActive: 2,
      // },
      // {
      //   id: 6,
      //   name: "MySQL",
      //   imageUrl:
      //     "https://storage.googleapis.com/unschool-portfolio-website/mysql.png",
      //   starsTotal: 3,
      //   starsActive: 2,
      // },
      // {
      //   id: 7,
      //   name: "Python",
      //   imageUrl:
      //     "https://storage.googleapis.com/unschool-portfolio-website/python.png",
      //   starsTotal: 3,
      //   starsActive: 3,
      // },
      // {
      //   id: 8,
      //   name: "Flask",
      //   imageUrl:
      //     "https://storage.googleapis.com/unschool-portfolio-website/flask.png",
      //   starsTotal: 3,
      //   starsActive: 2,
      // },
    ],
    recommendations: [
      // {
      //   id: 1,
      //   name: "Random guy 1",
      //   company: "ABC company",
      //   designation: "CEO",
      //   message: "He is a good engineer",
      // },
      // {
      //   id: 2,
      //   name: "Random guy 2",
      //   company: "ABC company",
      //   designation: "Director",
      //   message: "He is a punctual guy",
      // },
      // {
      //   id: 3,
      //   name: "Random guy 3",
      //   company: "ABC company",
      //   designation: "Manager",
      //   message: "He is a excellent developer",
      // },
      // {
      //   id: 4,
      //   name: "Random guy 4",
      //   company: "ABC company",
      //   designation: "SDE",
      //   message: "He gets things done quickly",
      // },
    ],
  };

  async componentDidMount() {
    const [responseRecommendations, responseSkills, responseProjects] =
      await Promise.all([
        axios.get("http://127.0.0.1:8080/api/recommendations"),
        axios.get("http://127.0.0.1:8080/api/skills"),
        axios.get("http://127.0.0.1:8080/api/projects"),
      ]);

    const newState = {};
    if (
      responseRecommendations.data.isSuccessful &&
      responseRecommendations.data.results.length !== 0
    ) {
      newState.recommendations = responseRecommendations.data.results;
    }
    if (
      responseSkills.data.isSuccessful &&
      responseSkills.data.results.length !== 0
    ) {
      newState.skills = responseSkills.data.results;
    }
    if (
      responseProjects.data.isSuccessful &&
      responseProjects.data.results.length !== 0
    ) {
      newState.projects = responseProjects.data.results;
    }

    this.setState(newState);
    // let response = await axios.get("http://127.0.0.1:8080/api/recommendations");
    // if (response.data.isSuccessful && response.data.results.length != 0){
    //   this.setState({
    //     recommendations: response.data.results,
    //   });
    // }

    // response = await axios.get("http://127.0.0.1:8080/api/skills");
    // console.log(response);
    // if (response.data.isSuccessful && response.data.results.length != 0){
    //   this.setState({
    //     recommendations: response.data.results,
    //   });
    // }

    // let response = await axios.get("http://127.0.0.1:8080/api/projects");
    // console.log(response);
    // if (response.data.isSuccessful && response.data.results.length != 0){
    //   this.setState({
    //     recommendations: response.data.results,
    //   });
    // }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
