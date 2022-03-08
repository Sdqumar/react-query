type navbarProps = {
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

export default function Navbar({ setPage }: navbarProps) {
  return (
    <nav>
      <button onClick={() => setPage("Planets")}>Planets</button>
      <button onClick={() => setPage("People")}>People</button>
    </nav>
  );
}
