export function Header(totalFollowers, slot1) {
  return `<header>
            <div class="header-container">
              <div class="logo">Social Media Dashboard</div>
              <div class="text-preset-5">Total Followers: ${totalFollowers}</div>
            </div> ${slot1}
          </header>`;
}
