class RelativeTimeFormatterKo {
  constructor() {
    this.units = {
      second: "초",
      minute: "분",
      hour: "시간",
      day: "일",
      month: "달",
      year: "년",
    };
  }

  format(date) {
    const diff = Date.now() - new Date(date).getTime();
    if (diff < 1000) return "방금 전";
    const seconds = Math.floor(diff / 1000);
    if (seconds < 60) return `${seconds}초 전`;

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}분 전`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}시간 전`;

    const days = Math.floor(hours / 24);
    if (days < 30) return `${days}일 전`;

    const months = Math.floor(days / 30);
    if (months < 12) return `${months}달 전`;

    const years = Math.floor(months / 12);
    return `${years}년 전`;
  }
}

module.exports = { RelativeTimeFormatterKo };
