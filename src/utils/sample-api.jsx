const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 13; i <= 23; i++) {
    if (random() < 0.5) {
      result.push({
        key: i + ":00",
        value: i + ":00",
      });
    }
    if (random() < 0.5) {
      result.push({
        key: i + ":30",
        value: i + ":30",
      });
    }
  }
  return result;
};

export const submitAPI = function (formData) {
  return true;
};
