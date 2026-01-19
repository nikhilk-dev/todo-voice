export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img 
              src={`${import.meta.env.BASE_URL}favicon.svg`}
              alt="TODO" 
              className="w-8 h-8 rounded-lg shadow-md"
            />
            <span className="font-semibold text-foreground">TODO</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TODO. Designed in Canada.
          </p>
        </div>
      </div>
    </footer>
  );
};
