import { useAppContextContainer } from "../../context/AppContext";
import { useTranslation } from "react-i18next";
import OptionSelector from "./OptionSelector";

const OptionLanguages = () => {
  const { languages, languagesChoice, setLanguagesChoice } =
    useAppContextContainer();
  const { i18n } = useTranslation();
  const fiteredList = [...languages.filter((lang) => lang !== languagesChoice)];

  return (
    <ul className="group w-7 dark:text-black">
      <li className="cursor-default">{languagesChoice}</li>
      {fiteredList.map((el, index) => {
        const onClickChangeLanguage = () => {
          if (el === "ENG" || el === "POL" || el === "BLR") {
            setLanguagesChoice(el);
            i18n.changeLanguage(el);
          }
        };

        return (
          <OptionSelector
            key={index}
            onClickFunction={onClickChangeLanguage}
            spaceIndex={index}
            selectorText={el}
          />
        );
      })}
    </ul>
  );
};

export default OptionLanguages;
