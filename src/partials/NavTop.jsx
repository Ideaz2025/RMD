import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./CSS/NavTop.css";
import { FiMenu, FiHome, FiUser, FiBookOpen, FiAward, FiUsers, FiBriefcase, FiStar, FiMail, FiEdit3, FiChevronDown, FiChevronUp } from "react-icons/fi";

function isMobile() {
  return window.innerWidth <= 992;
}

function NavTop() {
  const [mobile, setMobile] = useState(isMobile());
  const [open, setOpen] = useState(null);
  const [sideMenu, setSideMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(isMobile());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAccordion = (key) => setOpen(open === key ? null : key);

  // Side menu content for mobile
  const mobileMenu = (
    <>
      <div className="side-menu-backdrop" onClick={() => setSideMenu(false)} />
      <nav className="side-menu">
        <button className="side-menu-close" onClick={() => setSideMenu(false)}>×</button>
        <Nav className="flex-column">
          <Nav.Link as={NavLink} to="/" onClick={() => setSideMenu(false)}>
            <FiHome style={{marginRight: 8}} /> Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" onClick={() => setSideMenu(false)}>
            <FiUser style={{marginRight: 8}} /> About
          </Nav.Link>
          {/* Journal Accordion */}
          <div className="mobile-accordion">
            <button className="accordion-toggle" onClick={() => handleAccordion("journal")}>
              <FiEdit3 style={{marginRight: 8}} />
              Journal {open === "journal" ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {open === "journal" && (
              <div className="accordion-content">
                <NavLink to="/journal/national" onClick={() => setSideMenu(false)}><FiStar style={{marginRight: 6}} /> National</NavLink>
                <NavLink to="/journal/international" onClick={() => setSideMenu(false)}><FiStar style={{marginRight: 6}} /> International</NavLink>
              </div>
            )}
          </div>
          {/* Conference Accordion */}
          <div className="mobile-accordion">
            <button className="accordion-toggle" onClick={() => handleAccordion("conference")}>
              <FiUsers style={{marginRight: 8}} />
              Conference {open === "conference" ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {open === "conference" && (
              <div className="accordion-content">
                <NavLink to="/conference/national" onClick={() => setSideMenu(false)}><FiStar style={{marginRight: 6}} /> National</NavLink>
                <NavLink to="/conference/international" onClick={() => setSideMenu(false)}><FiStar style={{marginRight: 6}} /> International</NavLink>
              </div>
            )}
          </div>
          {/* Patent Accordion */}
          <div className="mobile-accordion">
            <button className="accordion-toggle" onClick={() => handleAccordion("patent")}>
              <FiAward style={{marginRight: 8}} />
              Patent {open === "patent" ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {open === "patent" && (
              <div className="accordion-content">
                <NavLink to="/patent/published" onClick={() => setSideMenu(false)}><FiBookOpen style={{marginRight: 6}} /> Published</NavLink>
                <NavLink to="/patent/granted" onClick={() => setSideMenu(false)}><FiBookOpen style={{marginRight: 6}} /> Granted</NavLink>
              </div>
            )}
          </div>
          {/* Book Accordion */}
          <div className="mobile-accordion">
            <button className="accordion-toggle" onClick={() => handleAccordion("book")}>
              <FiBookOpen style={{marginRight: 8}} />
              Book {open === "book" ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {open === "book" && (
              <div className="accordion-content">
                <NavLink to="/book/published" onClick={() => setSideMenu(false)}><FiBookOpen style={{marginRight: 6}} /> Published</NavLink>
              </div>
            )}
          </div>
          <Nav.Link as={NavLink} to="/fdp" onClick={() => setSideMenu(false)}>
            <FiUsers style={{marginRight: 8}} /> FDP
          </Nav.Link>
          <Nav.Link as={NavLink} to="/membership" onClick={() => setSideMenu(false)}>
            <FiUser style={{marginRight: 8}} /> Membership
          </Nav.Link>
          <Nav.Link as={NavLink} to="/experience" onClick={() => setSideMenu(false)}>
            <FiBriefcase style={{marginRight: 8}} /> Experience
          </Nav.Link>
          <Nav.Link as={NavLink} to="/awards" onClick={() => setSideMenu(false)}>
            <FiAward style={{marginRight: 8}} /> Awards
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" onClick={() => setSideMenu(false)}>
            <FiMail style={{marginRight: 8}} /> Contact
          </Nav.Link>
          <Nav.Link as={NavLink} to="/Studentreviews" onClick={() => setSideMenu(false)}>
            <FiStar style={{marginRight: 8}} /> Student Reviews
          </Nav.Link>
        </Nav>
      </nav>
    </>
  );

  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className="navtop py-3">
      <Container fluid className="px-4">
        <Navbar.Brand className="navtop-brand">
          <Link to="/" className="navbar-brand">
            Dr.MURUGADOSS <i id="normal">R</i>.
          </Link>
        </Navbar.Brand>

        {mobile ? (
          <button className="side-menu-toggle" onClick={() => setSideMenu(true)}>
            <FiMenu size={28} />
          </button>
        ) : (
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <FiMenu size={28} />
          </Navbar.Toggle>
        )}

        {!mobile && (
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto navtop-list">
              <Nav.Link as={NavLink} to="/" className="accordion-toggle">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="accordion-toggle">About</Nav.Link>
              <NavDropdown title="Journal" id="journal-dropdown">
                <NavDropdown.Item as={NavLink} to="/journal/national">National</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/journal/international">International</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Conference" id="conference-dropdown">
                <NavDropdown.Item as={NavLink} to="/conference/national">National</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/conference/international">International</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Patent" id="patent-dropdown">
                <NavDropdown.Item as={NavLink} to="/patent/published">Published</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/patent/granted">Granted</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Book" id="book-dropdown">
                <NavDropdown.Item as={NavLink} to="/book/published">Published</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/fdp" className="accordion-toggle">FDP</Nav.Link>
              <Nav.Link as={NavLink} to="/membership" className="accordion-toggle">Membership</Nav.Link>
              <Nav.Link as={NavLink} to="/experience" className="accordion-toggle">Experience</Nav.Link>
              <Nav.Link as={NavLink} to="/awards" className="accordion-toggle">Awards</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="accordion-toggle">Contact</Nav.Link>
              <Nav.Link as={NavLink} to="/Studentreviews" className="accordion-toggle">Student Reviews</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
      {/* Side menu for mobile */}
      {mobile && sideMenu && mobileMenu}
    </Navbar>
  );
}

export default NavTop;