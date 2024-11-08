const animatedNavbarCode = 
`import React, { useRef, useEffect } from 'react';

export default function AnimatedNavbar({
  items = ['Home', 'Inventions', 'Gallery', 'Institution', 'Contact'],
  navbarColor = 'bg-white',
  textColor = 'text-black',
  hoverBgColor = '#646465',
}) {
  const navbarRef = useRef(null);
  const hoverBgRef = useRef(null);

  useEffect(() => {
    const menuItems = navbarRef.current.querySelectorAll('li');
    menuItems.forEach((item) => {
      item.addEventListener('mouseover', () => {
        const itemPosition = item.offsetLeft;
        const itemWidth = item.offsetWidth;

        hoverBgRef.current.style.left = \`\${itemPosition}px\`;
        hoverBgRef.current.style.width = \`\${itemWidth}px\`;
        hoverBgRef.current.style.visibility = 'visible';
        hoverBgRef.current.style.opacity = '0.3';
      });
    });

    navbarRef.current.addEventListener('mouseleave', () => {
      hoverBgRef.current.style.visibility = 'hidden';
      hoverBgRef.current.style.opacity = '0';
    });
  }, []);

  return (
    <nav className={\`\${navbarColor} p-2 relative shadow-md\`}>
      <ul ref={navbarRef} className="flex justify-center relative">
        {items.map((item) => (
          <li key={item} className="mx-2">
            <a href="#" className={\`\${textColor} px-3 py-1 block transition-colors duration-200\`}>
              {item}
            </a>
          </li>
        ))}
        <div
          ref={hoverBgRef}
          className="absolute h-full top-0 left-0 w-24 opacity-0 transition-all duration-200 rounded-md"
          style={{ visibility: 'hidden', backgroundColor: hoverBgColor }}
        ></div>
      </ul>
    </nav>
  );
}`;

const animatedNavbarCodeUsage = (
  `<AnimatedNavbar
    items={['Home', 'Inventions', 'Gallery', 'Institution', 'Contact']}
    navbarColor="bg-white"
    textColor="text-black"
    hoverBgColor="#646465"
  />`
);


export { animatedNavbarCode, animatedNavbarCodeUsage };
