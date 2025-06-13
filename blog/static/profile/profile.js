document.addEventListener('DOMContentLoaded', function () {
  const updateProfileImageSrc = (img) => {
    const isWeasel = img.dataset.isWeasel === "true";
    let src = "/static/profile/";

    src += isWeasel ? "weasel-profile.png" : "human-profile.png";
    img.src = src;
  }

  const updateShoutoutBubble = (img) => {
    const bubble = document.querySelector('profile-bubble');
    const isWeasel = img.dataset.isWeasel === "true";
    bubble.innerHTML = isWeasel
    ? 'Shoutout to <a href="https://bsky.app/profile/id-x.bsky.social">IDX</a> for drawing my assets!'
    : 'Shoutout to <a href="https://linktr.ee/ShizuoRin">ShizuoRin</a> for this profile picture!';
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
  updateShoutoutBubble(profilePic)
  
  profilePic.addEventListener('click', function () {
    const current = profilePic.dataset.isWeasel === "true";
    profilePic.dataset.isWeasel = (!current).toString();
    updateProfileImageSrc(profilePic);
    updateShoutoutBubble(profilePic)

    // Add flash class
    profilePic.classList.add('flash');

    // Remove it after animation completes
    setTimeout(() => {
      profilePic.classList.remove('flash');
    }, 500); // match animation duration
  });
});