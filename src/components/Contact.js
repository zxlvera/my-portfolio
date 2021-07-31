function Contact() {
  return (

    <div className="pt-4 container flex flex-col mx-auto w-full items-center justify-start">
      <ul className="flex flex-col">
        <li className="border-gray-400 flex flex-row mb-2">
          <a href="http://linkedin.com/in/veralimzx" target="_blank" rel="noopener noreferrer"
            className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
              <div className="flex-1 pl-1 md:mr-16">
                <div className="font-medium dark:text-white">
                  Discover me professionally on...
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-200 text-xs">
                LinkedIn
              </div>
              <button className="w-24 text-right flex justify-end">
                <svg width="12" fill="currentColor" height="12" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                  </path>
                </svg>
              </button>
          </a>
        </li>
        <li className="border-gray-400 flex flex-row mb-2">
          <a href="http://instagram.com/zxlvera" target="_blank" rel="noopener noreferrer"
            className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
              <div className="flex-1 pl-1 md:mr-16">
                <div className="font-medium dark:text-white">
                  How do I look like on...
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-200 text-xs">
                Instagram
              </div>
              <button className="w-24 text-right flex justify-end">
                <svg width="12" fill="currentColor" height="12" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                  </path>
                </svg>
              </button>
          </a>
        </li>
        <li className="border-gray-400 flex flex-row mb-2">
          <a href="http://github.com/zxlvera" target="_blank" rel="noopener noreferrer"
             className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
              <div className="flex-1 pl-1 md:mr-16">
                <div className="font-medium dark:text-white">
                  Place where I store my codes...
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-200 text-xs">
                Github
              </div>
              <button className="w-24 text-right flex justify-end">
                <svg width="12" fill="currentColor" height="12" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                  </path>
                </svg>
              </button>
          </a>
        </li>
      </ul>
    </div>

  );
}

export default Contact;
