function Logo({ img, className = "" }) {
  return <img src={img} alt="Logo" className={`${className}`} loading="lazy" />;
}

export default Logo;
