import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Footer extends Component {
  render() {
    return (
      <div className="Footer-main">
        <div className="footer-inner">
          <div id="footer-bottom" className="ftr-bot-black">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="copyright">
                  <p>© 2019 <Link to="#">BookLab</Link>. All rights reserved.</p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="terms">
                  <ul className="list-unstyled list-inline">
                    <li><Link to="#">Terms &amp; Condition</Link></li>
                    <li><Link to="#">Privacy Policy</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
