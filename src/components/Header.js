import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Menu from "./Menu"
import MenuMobile from "./MenuMobile"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuActive: false,
    }
  }

  toggleMenu = menuActive => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }))
  }
  render() {
    return (
      <header>
        <div className="container">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">Hughson Wong</Link>
            </div>
            <div className="navigation">
              <nav>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
              </nav>
              <MenuMobileimport React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';

const MenuMobile = props => {
  const { menuLinks } = props.data.site.siteMetadata;
  return (
    <div
      id="main-menu-mobile"
      className={`main-menu-mobile ${props.active ? 'open' : ''}`}
    >
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query MenuMobileQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <MenuMobile active={props.active} data={data} />}
  />
); active={this.state.menuActive} />
              <Menu />
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
