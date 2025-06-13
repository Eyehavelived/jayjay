document.addEventListener('DOMContentLoaded', function () {
  const updateProfileImageSrc = (img) => {
    const isWeasel = img.dataset.isWeasel === "true";
    let src = "/static/profile/";

    src += isWeasel ? "weasel-profile.png" : "human-profile.png";
    img.src = src;
  }

  const updateProfileAccessorySrc = (img) => {
    const isDM = img.dataset.isDM === "true";
    let src = "/static/profile/";
    src += isDM ? "dm-accessory.png" : "laptop-accessory.png"
    img.src = src
  }

  const profilePic = document.querySelector('.profile-pic');
  const profileAcessory = document.querySelector('.profile-accessory')
  if (!profilePic || !profileAcessory) return;

  updateProfileImageSrc(profilePic)
  updateProfileAccessorySrc(profileAcessory)
  
  profilePic.addEventListener('click', function () {
    const current = profilePic.dataset.isWeasel === "true";
    profilePic.dataset.isWeasel = (!current).toString();
    updateProfileImageSrc(profilePic);

    // Add flash class
    profilePic.classList.add('flash');

    // Remove it after animation completes
    setTimeout(() => {
      profilePic.classList.remove('flash');
    }, 500); // match animation duration
  });
});