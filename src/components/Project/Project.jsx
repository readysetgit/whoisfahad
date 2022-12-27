import React, { Component } from "react";
import "./Project.scss";
import Chip from "../Chip/Chip";
class Project extends Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false,
    };
  }

  render() {
    return (
      <div>
        {this.state.isExpanded === false && this.renderCollapsedForm()}
        {this.state.isExpanded === true && this.renderExpandedForm()}
      </div>
    );
  }

  toggleExpansion = () => {
    this.setState((prevState) => ({
      ...this.prevState,
      isExpanded: !prevState.isExpanded,
    }));
  };

  renderCollapsedForm() {
    return (
      <div className="sport" onClick={this.toggleExpansion}>
        <p className="name">
          <span className="material-symbols-outlined">{this.props.project.icon}</span>
        </p>
        <span className="skill-level">
            {this.props.project.name}
        </span>
      </div>
    );
  }

  renderExpandedForm() {
    return (
      <div className="sport expanded" onClick={this.toggleExpansion}>
        <p className="name">
          <span className="material-symbols-outlined">{this.props.project.icon}</span>
          {this.props.project.name}
        </p>
        <p className="ptl">{this.props.project.details}</p>
        <div className="all-chips">
            { this.props.project.techstack && this.props.project.techstack.map(skill => <Chip name={skill}/>)} 
          </div>
      </div>
    );
  }
}

export default Project;
