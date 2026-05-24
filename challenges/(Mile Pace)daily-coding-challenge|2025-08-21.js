function milePace(miles, duration) {
  const [minStr, secStr] = duration.split(':');
  const minutes = Number(minStr) || 0;
  const seconds = Number(secStr) || 0;
  const totalSeconds = minutes * 60 + seconds;
  const paceSeconds = Math.round(totalSeconds / miles);

  const paceMin = Math.floor(paceSeconds / 60);
  const paceSec = paceSeconds % 60;

  return String(paceMin).padStart(2, '0') + ':' + String(paceSec).padStart(2, '0');
}
