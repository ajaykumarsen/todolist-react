import Logo from "./Logo"

export default function Header() {
  return (
    <header className="col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.08]
     flex justify-between items-center px-[28px]">
        <Logo></Logo>
        <p><b>0</b> / 0 todos completed</p>
    </header>
  );
}
