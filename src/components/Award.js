import React, { Component } from "react";

class Award extends Component {
  render() {
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.award;
    }
    if (this.props.resumeAward) {
      var Awards = this.props.resumeAward.map(function (awards, i) {
        return (
          <div className="d-flex flex-column center " key={i}>
            <p className="award-title">{awards.title}</p>
            <p className="award-label">{awards.label}</p>
            <p className="award-label">{awards.date}</p>
          </div>
        );
      });
    }
    return (
      <section id="award">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          {Awards}
          <br />
        </div>
      </section>
    );
  }
}

export default Award;
