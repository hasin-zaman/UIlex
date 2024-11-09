export function Title({ componentTitle, githubUsername, githubLink }) {
    return (
      <div className="w-full mb-5 md:mb-1 flex flex-col items-center">
        <h2 className="text-4xl font-extrabold text-transparent pb-1 bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-lg leading-tight">
          {componentTitle}
        </h2>
  
        <a 
          className="text-lg font-medium text-primary-foreground hover:text-accent transition-all duration-300 relative group"
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          by @{githubUsername}
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </a>
      </div>
    );
  }  