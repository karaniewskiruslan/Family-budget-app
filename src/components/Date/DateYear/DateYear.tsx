import { useAppContextContainer } from "../../../context/AppContext";
import ArrowIcon from "../../../svg/ArrowIcon";
import DateButton from "../DateButton";

const DateYear = () => {
  const { isDarkmode, currentDate, setCurrentDate, expensesList } =
    useAppContextContainer();

  console.log(currentDate);

  const onClickChangeYear = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.classList.contains("rotate-180")) {
      if (currentDate.year - 1 in expensesList) {
        setCurrentDate((prev) => ({
          ...prev,
          year: prev.year - 1,
          month: Number(Object.keys(expensesList[prev.year - 1])[0]),
        }));

        return;
      } else return;
    }

    setCurrentDate((prev) => ({
      ...prev,
      year: prev.year + 1,
      month: Number(Object.keys(expensesList[prev.year + 1])[0]),
    }));
  };

  return (
    <section className="flex w-3/4 items-center justify-between">
      <DateButton
        onClickFunction={onClickChangeYear}
        isYearExist={currentDate.year - 1 in expensesList}
        leftArrow={true}
        icon={<ArrowIcon fill={isDarkmode ? "black" : "lightgray"} />}
      />
      <div className="text-center">{currentDate.year}</div>
      <DateButton
        onClickFunction={onClickChangeYear}
        isYearExist={currentDate.year + 1 in expensesList}
        icon={<ArrowIcon fill={isDarkmode ? "black" : "lightgray"} />}
      />
    </section>
  );
};

export default DateYear;
