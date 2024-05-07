const Header = () => {
  return (
    <header>
      <h1>
        <a href="/" className="headline">Wordle Builder</a>
      </h1>
      <a
        href="https://github.com/joannahosking/wordle-builder"
        target="noreferrer"
        className="github"
      >
        <span><span>Visit on </span>Github</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.141 4.82018C10.495 4.42642 11.1049 4.39095 11.5032 4.74096L16.6762 9.28703C16.8821 9.46805 17 9.72752 17 10C17 10.2725 16.8821 10.5319 16.6762 10.713L11.5032 15.259C11.1049 15.609 10.495 15.5736 10.141 15.1798C9.78699 14.7861 9.82286 14.1831 10.2211 13.8331L13.4973 10.9539H3.96486C3.43198 10.9539 3 10.5268 3 10C3 9.47316 3.43198 9.04607 3.96486 9.04607H13.4973L10.2211 6.16691C9.82286 5.8169 9.78699 5.21395 10.141 4.82018Z"
            fill="#201F29"
          ></path>
        </svg>
      </a>
    </header>
  );
};

export default Header;
