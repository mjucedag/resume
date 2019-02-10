import React, { Component } from 'react';
import Tooltip from "react-simple-tooltip";

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out My Programming Languajes.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          <ul className="cbp-ig-grid">
            {
                resumeData.portfolio && resumeData.portfolio.map((item)=>{
                return(
                    <li>
                      <Tooltip content={item.tooltip}>
                        <span>
                            <i className={`cbp-ig-icon ${item.icon}`}></i>
                        </span>
                      </Tooltip>
                    </li>
                )
                })
            }
           
            <li>
              <Tooltip content="Ionic">
                  <span>
                      <i className={`cbp-ig-icon`}>
                        <span class="iconify" data-icon="ion:logo-ionic" data-inline="false"></span>
                      </i>
                  </span>
                </Tooltip>
            </li>

            <li>
              <Tooltip content="SAP">
                  <span>
                      <i className={`cbp-ig-icon`}>
                        <span class="iconify" data-icon="simple-icons:sap" data-inline="false"></span>
                      </i>
                  </span>
                </Tooltip>
            </li>

            <li>
              <Tooltip content="Testing">
                  <span>
                      <i className={`cbp-ig-icon`}>
                        <span class="iconify" data-icon="mdi-test-tube" data-inline="false"></span>
                      </i>
                  </span>
                </Tooltip>
            </li>
          
          </ul>
          
          </div>
        </div>
      </div>
  </section>
        );
  }
}