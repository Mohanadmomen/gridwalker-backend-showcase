const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-sm text-muted-foreground">
          <span className="text-primary">&gt;</span> Built with React + Tailwind CSS
        </p>
        <p className="font-mono text-xs text-muted-foreground/60 mt-1">
          © {new Date().getFullYear()} Mohanad Momen
        </p>
      </div>
    </footer>
  );
};

export default Footer;
