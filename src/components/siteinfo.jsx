import React, { Component } from 'react'
import css from '../pages/page.styl'

export default class SiteInfo extends Component {
  render() {
    return (<div>
      {/* @todo remove after react update */}
      <p className={css.secondary}>
      How can we serve you better with cool ML models? Please answer this 
      <a
        onClick={() => {
          ga('send', 'event', 'Index', 'click_feedback');
        }}
        href="https://coreml.typeform.com/to/grz0b2"
        target="_blank"
      > form</a>.
      </p>
      <p className={css.secondary}>
      To receive weekly updates for new ML models, please
      <a
        onClick={() => {
          ga('send', 'event', 'Index', 'click_subscribe');
        }}
        href="http://eepurl.com/c4II-r"
        target="_blank"
      > subscribe</a>.
      </p>
      <p className={css.secondary}>Thwis Inc., 2017 <a href="mailto:hello@thywis.com">Email Us</a></p>
    </div>)    
  }
}