const dateFormatter = date => {
  const year  = Number(date.substring(0, 4));
  const month = Number(date.substring(4, 6));
  const day   = Number(date.substring(6, 8));

  return year + "年" + month + "月" + day + "日";
}

export default dateFormatter;
