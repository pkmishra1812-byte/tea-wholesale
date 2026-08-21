// src/pages/NotFoundPage.jsx
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <p className="font-display text-9xl text-tea-200 font-bold">404</p>
      <h1 className="font-display text-3xl text-charcoal -mt-4 mb-3">Page Not Found</h1>
      <p className="font-body text-charcoal/50 mb-8">
        Looks like this page wandered off into the tea garden.
      </p>
      <Link to="/" className="btn-primary">Back to Home</Link>
    </div>
  );
}
