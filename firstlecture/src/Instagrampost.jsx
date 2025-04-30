import "./Instagrampost.css";
export default function Instagrampost() {
  return (
    <div className="ig-wrapper">
      <div className="ig-header">
        <div className="ig-header-left">
          <img
            className="ig-profile-pic"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Ffcb_logo%2Ffcb_logo_PNG14.png&f=1&nofb=1&ipt=53e72038460b8aa5e8b2ad17dfe5b63ae61d63ed5a623fb7eb8f62065d065752"
            alt="profile"
          />
          <span className="ig-username">
            <p>fcbarcelona</p>
            <img
              src="https://www.pngall.com/wp-content/uploads/8/Verification-Blue-Tick.png"
              alt=""
              className="ig-checkmark"
            />
          </span>

          <span className="ig-dot">•</span>

          <span className="ig-time">1h</span>
        </div>
        <div className="ig-header-rigth"></div>
      </div>
      <img className="ig-main-img" src="/post.jpg" alt="post" />
      <div className="ig-actions">
        <span className="ig-like" style={{ color: "red" }}>
          LIKE
        </span>
        <span className="ig-comment">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1"
            />
          </svg>
        </span>
        <span className="ig-share">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14L21 3m0 0l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z"
            />
          </svg>
        </span>
      </div>
      <div className="ig-likes">1,024 likes</div>
      <div className="ig-caption">
        <span className="ig-username">FC Barcelona</span>
        💙 𝗖𝗢𝗣𝗔 𝗖𝗛𝗔𝗠𝗣𝗜𝗢𝗡𝗦𝗦𝗦𝗦𝗦 ❤️ <span className="ig-hashtag">
          @spotify
        </span>{" "}
        <span className="ig-hashtag">#clasico</span>
      </div>
      <div className="ig-comments">View all 42 comments</div>
    </div>
  );
}
