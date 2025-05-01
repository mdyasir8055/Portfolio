export function Footer() {
  return (
    <footer className="bg-muted/40 py-6">
      <div className="container px-4 mx-auto">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}