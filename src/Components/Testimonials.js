import React, { Component } from "react";

class Testimonials extends Component {
  render() {
    if (this.props.data) {
      var recommendationUrl = this.props.data.testimonials[0].recommendationUrl;
      var testimonials = this.props.data.testimonials.map(function (
        testimonials
      ) {
        return (
          <li key={testimonials.user}>
            <blockquote>
              <p>{testimonials.text}</p>
              <cite>{testimonials.user}</cite>
            </blockquote>
          </li>
        );
      });
    }

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Testimonials</span>
              </h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">{testimonials}</ul>
            </div>
          </div>
          <div className="row">
            <div className="twelve columns flex-container main-col download-recommendation">
              <a href={recommendationUrl} className="button">
                <i className="fa fa-eye"></i> View Recommendation
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
