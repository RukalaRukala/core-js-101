function angleBetweenClockHands(dateUtc) {
  const date = new Date(dateUtc);
  const hour = date.getUTCHours() <= 12 ? date.getUTCHours() : date.getUTCHours() - 12;
  const minuteDeg = date.getUTCMinutes() * 6 + date.getUTCSeconds() * 0.1;
  const hourDeg = hour * 30 + date.getUTCMinutes() * 0.5;
  const angle = () => {
    if (minuteDeg > hourDeg) {
      const result = minuteDeg - hourDeg;
      return result <= 180 ? result : 360 - result;
    }
    const result = hourDeg - minuteDeg;
    return result <= 180 ? result : 360 - result;
  };
  return angle();
}

console.log(angleBetweenClockHands(Date.UTC(2016, 3, 5, 14, 20)));
