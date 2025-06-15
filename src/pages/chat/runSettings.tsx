import "./runSettings.scss";

export default function RunSettings() {
  return (
    <div>
      <div className="flex justify-between h-52px">
        <span className="pt-1">Run settings</span>
        <span>
          <button>
            <img
              src="https://ik.imagekit.io/tgva/refreshsettings.png?updatedAt=1749986649061"
              alt="refresh settings icon"
              className="h-5 w-5"
            />
          </button>
        </span>
      </div>
      <hr />
    </div>
  );
}
