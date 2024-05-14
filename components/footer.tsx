export default function Footer() {
  interface NavItem {
    idx: number;
    name: string;
    href: string;
  }
  const footerNavs: NavItem[] = [
    {
      idx: 1,
      href: "/terms",
      name: "Terms",
    },
    {
      idx: 2,
      href: "/disclaimer",
      name: "Disclaimer",
    },
    {
      idx: 3,
      href: "/privacy",
      name: "Privacy",
    },
    {
      idx: 4,
      href: "/about",
      name: "About us",
    },
  ];
  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
          <p>© 2024 UvanTech Inc. All rights reserved.</p>
          <ul>
            {footerNavs.map((item) => (
              <li
                key={item.idx}
                className="text-gray-800 hover:text-gray-500 duration-150"
              >
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
