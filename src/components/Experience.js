import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i} >
              {technology}
            </Badge>
          );
        });
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i} ref={(el) => el && el.style.setProperty("backgroundColor", "#26408B", "important")}>
              {technology}
            </Badge>
          );
        });
        return ( 
            <VerticalTimelineElement
              date={work.years}
              className="vertical-timeline-element--work"
              iconStyle={{
                background: "#26408B",
                color: "#fff",
                textAlign: "center",
              }}
              icon={<i className="fab fa-angular experience-icon"></i>}
              key={i}
            >
              <div style={{ textAlign: "left", marginBottom: "4px" }}>
                {mainTech}
              </div>

              <h3
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                {work.title}
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                {work.company}
              </h4>
              <p
                style={{ textAlign: "left", fontSize: '1.25rem' }}
              >
                {work.description}
              </p>
              <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
            </VerticalTimelineElement>          
        );
      });
    }

    return (
      <section id="resume" className="pb-5" style={{backgroundColor: "#A6CFD5"}}>
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black", font: "32px/40px 'opensans-bold', sans-serif" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-12 mx-auto">
          <VerticalTimeline className="mw-100">
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#26408B",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>  
      </section>
    );
  }
}

export default Experience;