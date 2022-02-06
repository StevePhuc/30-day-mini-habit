const Footer = () => {
  return (
    <>
      <nav class="flex flex-col sm:flex-row items-center justify-around my-4 p-5">
        <p class="text-blue-500">
          <a href="https://troopl.com/challenges/goal-tracking-app">Troopl Hackathon challenge</a>
        </p>
        <p class="inline-flex text-blue-500">
          Built with
          <svg
            fill="#e53e3e"
            viewBox="0 0 24 24"
            class="w-5 h-5 mx-1 pt-px text-red-600"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          by Nguyen Hong Phuc and Do Thi Thu Hai
        </p>
        <p class="text-blue-500">
          <a href="https://github.com/StevePhuc/30-day-mini-habit">Source Code</a>
        </p>
      </nav>
    </>
  );
};

export default Footer;
