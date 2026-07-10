export function Header(totalFollowers) {
  return `<header>
            <div class="header-container">
              <div class="logo">Social Media Dashboard</div>
              <div class="total-followers">Total Followers: ${totalFollowers}</div>
            </div> Dark Mode
          </header>`;
}
