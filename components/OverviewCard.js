export function OverviewCard(item) {
  const { platform, metric, value, percentageChange, isPositive } = item;
  const upDown = isPositive ? "icon-up.svg" : "icon-down.svg";
  const changeClass = isPositive ? "is-positive" : "is-negative";

  return `
  <article class="overview-card">
    <div class="overview-header">
      <div class="metric">${metric}</div>
      <img src="./images/icon-${platform}.svg" alt="${platform} icon" class="overview-icon" />
    </div>

    <div class="overview-body">
      <div class="metric-value">${value}</div>
      <div class="metric-change ${changeClass}">
        <img src="./images/${upDown}" alt="${isPositive ? 'up' : 'down'}" class="delta-icon" />
        <span>${percentageChange}%</span>
      </div>
    </div>
  </article>
  `;
}
