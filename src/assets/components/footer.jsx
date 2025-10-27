const Footer = () => {
  const footerLinks = [
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms of Use', url: '#' },
    { name: 'Sales and Refunds', url: '#' },
    { name: 'Legal', url: '#' },
    { name: 'Site Map', url: '#' },
  ];

  return (
    <footer className="footer">
      <ul className="footer-links">
        {footerLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <p className="footer-copyright">
        Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer