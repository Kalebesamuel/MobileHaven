import React from 'react';
import { Container } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';

class Footer extends React.Component {
  render() {
    return (
      <footer className={'footer' + (this.props.default ? ' footer-default' : '')}>
        <Container fluid={this.props.fluid ? true : false}>
          <nav>
            <ul>
              <li>
                <a
                  href="https://evolog.atlassian.net/jira/software/c/projects/EVOLOG/boards/1/backlog?view=detail&quickFilter=36&issueLimit=100"
                  target="_blank">
                  Jira
                </a>
              </li>
              <li>
                <a href="https://console.firebase.google.com/u/3/?hl=pt-br" target="_blank">
                  App Center
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/console/u/0/developers/6123614294437735030/app-list"
                  target="_blank">
                  Play Console
                </a>
              </li>
              <li>
                <a href="https://appstoreconnect.apple.com/apps" target="_blank">
                  App Store Connect
                </a>
              </li>
              <li>
                <a href="https://console.firebase.google.com/u/3/?hl=pt-br" target="_blank">
                  Firebase
                </a>
              </li>
              <li>
                <a href="https://app.onesignal.com/apps" target="_blank">
                  One Signal
                </a>
              </li>
              <li>
                <a href="https://evolog.com.br/" target="_blank">
                  About Us
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            &copy; {1900 + new Date().getYear()}, Designed by{' '}
            <a href="https://www.invisionapp.com" target="_blank" rel="noopener noreferrer">
              Invision
            </a>
          </div>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
