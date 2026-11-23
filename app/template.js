// Re-mounts on every navigation → gives each page a soft enter transition.
export default function Template({ children }) {
  return <div className="page-enter">{children}</div>;
}
