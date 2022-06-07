const urlPathname = window.location.pathname;
export const loginText = () => {
  if (urlPathname==="/cartmanagement"||urlPathname==="/wishlist") {
    return "Logout";
  }
  return "Login";
}