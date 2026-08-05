export function SocialCard(item) {
  const { platform, username, count, changeToday, isPositive } = item;
  const upDown = isPositive ? "icon-up.svg" : "icon-down.svg";
  const changeClass = isPositive ? "is-positive" : "is-negative";

  return `
  <article class="social-card ${platform}">
    <div class="social-top-border" style="background: var(--color-${platform});"></div>

    <div class="card-body">
      <div class="card-header">
        <div class="header-left">
          <img src="./images/icon-${platform}.svg" alt="${platform} logo" class="platform-icon" />
          <div class="username">${username}</div>
        </div>
      </div>

      <div class="followers-count">${count}</div>
      <div class="followers-type">${item.type || ''}</div>

      <div class="card-footer ${changeClass}">
        <img src="./images/${upDown}" alt="${isPositive ? 'up' : 'down'}" class="delta-icon" />
        <span class="delta-text">${changeToday} Today</span>
      </div>
    </div>
  </article>
  `;
}
