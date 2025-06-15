import "./main.scss";

const iconButtons = [
  {
    src: "https://img.icons8.com/?size=100&id=h0YeLvDOxI8d&format=png&color=000000",
    alt: "notepad icon",
  },
  {
    src: "https://img.icons8.com/?size=100&id=n5T48CrsJg4A&format=png&color=000000",
    alt: "code icon",
  },
  {
    src: "https://img.icons8.com/?size=100&id=82713&format=png&color=000000",
    alt: "share icon",
  },
  {
    src: "https://img.icons8.com/?size=100&id=82736&format=png&color=000000",
    alt: "save icon",
  },
  {
    src: "https://img.icons8.com/?size=100&id=qzoozZ7SlO1N&format=png&color=000000",
    alt: "compare icon",
  },
  {
    src: "https://img.icons8.com/?size=100&id=86220&format=png&color=000000",
    alt: "refresh icon",
  },
  {
    src: "https://img.icons8.com/?size=100&id=16252&format=png&color=000000",
    alt: "menu icon",
  },
];

export default function ChatMain() {
  return (
    <div>
      <div className="flex justify-between">
        <span className="p-3">Chat Prompt</span>
        <div className="flex">
          {iconButtons.map((icon, index) => (
            <button
              key={index}
              className="m-2 p-2 hover:bg-[#ebeef9] border-radius-50percentage"
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="h-5 w-5 border-radius-50percentage"
              />
            </button>
          ))}
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center">
        <h1 className="text-4xl text-blue-600 m-5">Welcome to AI Studio</h1>
      </div>
      <div className="relative w-full border-radius-30px p-18px">
        <input
          type="text"
          className="w-full pr-24 pl-2 py-2 p-18px border-radius-30px rounded border"
          placeholder="Type your message..."
        />
        <div className="absolute inset-y-0 right-9 flex items-center space-x-1 text-sm">
          <img
            src="https://img.icons8.com/?size=100&id=1501&format=png&color=000000"
            alt="plus icon"
            className="h-5 w-5 mr-2"
          />
          <div className="flex items-center space-x-1 grey-bg-ctrl-btn border-radius-30px p-2">
            <span className="mr-1 text-gray-600">Run</span>
            <span className="flex items-center gap-1 text-sm">Ctrl</span>
            <img
              src="https://img.icons8.com/?size=100&id=22rVivY8BeXJ&format=png&color=000000"
              alt="enter icon"
              className="h-5 w-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
