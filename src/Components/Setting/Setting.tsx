// React
import React from "react";
// React
// CSS
import styles from "./Setting.module.css";
// CSS
// Models And Interfaces
import { I_Colors } from "../../Models/interfaces";
import Hr from "../Hr/Hr";
// Models And Interfaces

type SettingProps = {
  setThemeColor: Function;
  currentTheme: string;
};

const Setting: React.FunctionComponent<SettingProps> = ({
  currentTheme,
  setThemeColor,
}) => {
  const [selected, setSelected] = React.useState(false);
  const colors: I_Colors[] = [
    {
      id: "c-1",
      colorCode: "rgb(90, 194, 78)",
    },
    {
      id: "c-2",
      colorCode: "rgb(101, 180, 243)",
    },
    {
      id: "c-3",
      colorCode: "rgb(245, 166, 64)",
    },
    {
      id: "c-4",
      colorCode: "rgb(238, 97, 146)",
    },
    {
      id: "c-5",
      colorCode: "rgb(187, 104, 200)",
    },
    {
      id: "c-6",
      colorCode: "rgb(238, 83, 79)",
    },
    {
      id: "c-7",
      colorCode: "rgb(0, 100, 20)",
    },
    {
      id: "c-8",
      colorCode: "rgb(125, 125, 125)",
    },
  ];

  return (
    <div className={`${styles.settingContainer} flex flex-col items-center`}>
      <Hr text="Theme Setting" className="mb-2" />
      <section
        className={`${styles.themeColorSection} w-full flex flex-col items-center justify-between`}
      >
        <h1 className="mt-1">تغییر رنگ تم</h1>
        <input
          type="text"
          className={`${styles.customInput} py-2 px-10 rounded-2xl mt-2`}
          placeholder={` 😊 رنگی که دوست داری رو اینجا وارد کن`}
          onChange={(e) => {
            if (e.target.value.length <= 2)
              return setThemeColor("rgb(166,33,196)");
            else {
              setThemeColor(e.target.value);
            }
          }}
        />
        <div className={`${styles.colorsContainer} `}>
          {colors.map((item) => (
            <div
              key={item.id}
              className={`${styles.colorItem} w-10 h-10`}
              style={{ background: item.colorCode }}
              onClick={() => {
                setThemeColor(item.colorCode);
              }}
            ></div>
          ))}
        </div>
      </section>
      <Hr text="Night Mode Controller" className="mb-2" />
      <section
        className={`${styles.nightModeController} flex flex-col items-center justify-center`}
      >
        <h1 className="flex items-center">
          <span>{selected ? "روشن" : "خاموش"}</span>
          {" : "}
          <span>حالت شب</span>
        </h1>
        <label
          htmlFor="checked-toggle"
          className="inline-flex relative items-center cursor-pointer mt-4"
        >
          <input
            type="checkbox"
            value=""
            id="checked-toggle"
            className="sr-only peer"
            checked={selected ? true : false}
            onClick={() => {
              setSelected((prevState) => !prevState);
            }}
            onChange={() => {}}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
        </label>
      </section>
      <Hr text="theme" />
      <section
        className={`flex flex-col items-center ${styles.fontController}`}
      >
        <h1>فونت صفحه</h1>
        <input
          type="number"
          className={`${styles.customInput} py-2 px-10 rounded-2xl mt-2`}
          placeholder={` 😊 سایز فونت رو اینجا وارد کن`}
          onChange={(e) => {
            if (e.target.value.length <= 2)
              return setThemeColor("rgb(166,33,196)");
            else {
              setThemeColor(e.target.value);
            }
          }}
        />
      </section>
    </div>
  );
};

export default Setting;
