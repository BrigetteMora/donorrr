import React from "react";
import "./FeaturesUi2ebook.css";

function FeaturesUi2ebook(props) {
  const { className } = props;

  return (
    <div className={`features-ui-2ebook ${className || ""}`}>
      <div className="overlap-group4">
        <div className="overlap-group3 roboto-normal-ebony-clay-20px">
          <img className="vote-1" src="/img/vote@1x.png" alt="Vote" />
          <img className="swap-for-tokens" src="/img/swap-for-tokens@2x.png" alt="Swap for Tokens" />
          <img
            className="leave-your-account-w"
            src="/img/leave-your-account-worries-to-us--so-you-can-focus-on-growing-yo@1x.png"
            alt="Leave your account worries to us, so you can focus on growing your business 1"
          />
          <div className="container-2"></div>
          <div className="h2-section-title-1">Set Up Your Profile</div>
          <div className="h2-section-title-2">Buy Donorrr Tokens</div>
        </div>
        <p className="h2-section-title-3 roboto-normal-ebony-clay-20px">Vote for the issues you care about</p>
        <div className="h2-section-title-4 roboto-normal-ebony-clay-40px">How this works</div>
      </div>
    </div>
  );
}

export default FeaturesUi2ebook;
