// サンプルファイルのインポート
const todos = require('../sample/sampleTodosForCore');
const usuals = require('../sample/sampleUsualForCore');

// 文字列strのindexに文字insertを挿入する
const insertStr = (str, index, insert) => {
  return str.slice(0, index) + insert + str.slice(index, str.length);
}

// "YYYYMMDD"型の文字列をオブジェクトに変換する
const dateStringToObject = dateString => {
  const dateObject = {
    year: Number(dateString.substring(0, 4)),
    month: Number(dateString.substring(4, 6)),
    day: Number(dateString.substring(6, 8))
  };

  return dateObject;
}

// オブジェクトをYYYYMMDD型の文字列に変換する
const dateObjectToString = dateObject => (
  ("0000" + String(dateObject.year)).slice(-4) + ("00" + String(dateObject.month)).slice(-2) + ("00" + String(dateObject.day)).slice(-2)
);

// プログラム実行時点における日付のオブジェクトを返す
const getCurrentDateObject = () => {
  const now = new Date();

  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate() + 1
  }
}

// YYYYMMDD型の文字列を受け取り，曜日("xxx")を返す
const getWeekdayOfDateString = dateString => {
  const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  dateString = insertStr(dateString, 4, "/");
  dateString = insertStr(dateString, 7, "/");

  const weekdayIdx = (new Date(dateString)).getDay()

  return weekdays[weekdayIdx];
};

// 時刻間の分数を計測する
const getDurationMinute = (beginTimeString, endTimeString) => {
  const beginHour = beginTimeString.substring(0, 2);
  const beginMinute = beginTimeString.substring(2, 4);
  const endHour = endTimeString.substring(0, 2);
  const endMinute = endTimeString.substring(2, 4);

  if (beginMinute === endMinute) {
    return (endHour - beginHour) * 60;
  } else if (beginMinute < endMinute) {
    return (endHour - beginHour) * 60 + (endMinute - beginMinute);
  } else {
    return (60 - beginMinute) + (endMinute) + ((endHour - beginHour - 1) * 60);
  }
}

// 引数オブジェクトの日付を1日進める
const advanceOneDay = dateObject => {
  const isLeapYear = y => !(y % 4) && (y % 100) || !(y % 400)

  dateObject.day++;

  if (dateObject.month === 2 && dateObject.day === 29 && !isLeapYear(dateObject.year)) {
    dateObject.mohth++;
    dateObject.day = 1;
    return dateObject;
  }

  if (dateObject.month === 2 && dateObject.day === 30) {
    dateObject.month++;
    dateObject.day = 1;
    return dateObject;
  }

  if (dateObject.month in [1, 3, 5, 7, 8, 10, 12] && dateObject.day === 32) {
    dateObject.month++;
    dateObject.day = 1;

    if (dateObject.month === 13) {
      dateObject.year++;
      dateObject.month = 1;
    }

    return dateObject
  }

  if (dateObject.month in [4, 6, 9, 11] && dateObject.day === 31) {
    dateObject.month++;
    dateObject.day = 1;
    return dateObject;
  }

  return dateObject;
}

// ユーザ入力値のサンプル
const userInput = {
  deadline: "20180224",
  durationMin: 120,
  title: "test todo",
  place: "somewhere",
  desc: "this is test todo",
  genre: "foobar"
};

const main = userInput => {
  // プログラム実行時点での日付のオブジェクトと曜日を取得する
  let currentDateObject = getCurrentDateObject();
  let currentWeekday = getWeekdayOfDateString(dateObjectToString(currentDateObject));

  let isSetTodo = false;

  while (true) {
    let usualsOfCurrentWeekday = usuals[currentWeekday]

    for (let usual of usualsOfCurrentWeekday) {

      if (getDurationMinute(usual.start, usual.end) >= userInput.durationMin) {
        console.log(`${currentDateObject.year}年${currentDateObject.month}月${currentDateObject.day}日の`);
        console.log(`${usual.start.substring(0, 2)}時${usual.start.substring(2, 4)}分から始めれば？`);

        isSetTodo = true;
        break;
      }
    }

    // Todoがセットされた時点でループを終える
    if (isSetTodo) {
      break;
    }

    // 日付と曜日を1日進める
    currentDateObject = advanceOneDay(currentDateObject);
    currentWeekday = getWeekdayOfDateString(dateObjectToString(currentDateObject));
  }
}

main(userInput);
