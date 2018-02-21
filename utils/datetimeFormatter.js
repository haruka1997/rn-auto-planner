export const dateFormatter = date => {
  const year  = Number(date.substring(0, 4));
  const month = Number(date.substring(4, 6));
  const day   = Number(date.substring(6, 8));

  return year + "年" + month + "月" + day + "日";
}

export const timeFormatter = time => {
  const hour   = time.substring(0, 2);
  const minute = time.substring(2, 4);

  return hour + ":" + minute;
}

