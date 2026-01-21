const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">DevPortfolio</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="mailto:your@email.com" className="cta-btn">Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;