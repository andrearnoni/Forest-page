import { useContext } from "react";
import { Context } from "../context/Provider";

function DateTimeComponent() {
  const { dia, temperatura, tempo } = useContext(Context);

  return (
    <div className="container mt-4 flex justify-center md:justify-start">
      <div className="inline-flex items-center rounded-md bg-verde-900">
        <span className="size-2 bg-verde-300 block rounded-full relative -left-1"></span>
        <div className="flex text-verde-300 divide-x-2 divide-verde-800">
          <div className="px-4 py-2 capitalize" id="dia">
            {dia}
          </div>
          <div className="px-4 py-2" id="temperatura">
            {`${temperatura}°C`}
          </div>
          <div className="px-4 py-2" id="tempo">
            {tempo}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateTimeComponent;
