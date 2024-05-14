export default function Footer() {
  const footerNavs = [
    {
      href: "/terms",
      name: "Terms",
    },
    {
      href: "/disclaimer",
      name: "Disclaimer",
    },
    {
      href: "/privacy",
      name: "Privacy",
    },
    {
      href: "/about",
      name: "About us",
    },
  ];
  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
          <p>© 2024 UvanTech Inc. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
            {footerNavs.map((item, idx) => (
              <li className="text-gray-800 hover:text-gray-500 duration-150">
                <a key={idx} href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
