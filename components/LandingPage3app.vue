<template>
  <div class="landing-page-3-app screen">
    <div class="header-2-darkapp">
      <div class="navbar-style-2-navbar-light">
        <img
          class="icon-mylogo"
          src="https://anima-uploads.s3.amazonaws.com/projects/636135c2cb12d88dfa0c245f/releases/6361369aeab6ca3acc126fe5/img/icon-mylogo@2x.svg"
          alt="icon mylogo"
        />
        <div class="navbar-container">
          <div class="navbar-toggler"></div>
          <div class="collapse-navbar-collapse">
            <div class="overlap-group">
              <img class="navbar-nav" :src="navbarNav" alt="navbar-nav" />
              <div class="link link">{{ link }}</div>
            </div>
            <div class="navbar-nav-1">
              <div class="nav-item">
                <div class="a">
                  <div class="btn-text link" v-html="btnText1"></div>
                </div>
              </div>
              <div class="nav-item-1">
                <div class="buttonbtnprimary-color">
                  <div class="btn-text-1 link">{{ btnText2 }}</div>
                  <img
                    class="icn-arrow-right-icn-xs"
                    src="https://anima-uploads.s3.amazonaws.com/projects/636135c2cb12d88dfa0c245f/releases/6361369aeab6ca3acc126fe5/img/icn-arrow-right--icn-xs@2x.svg"
                    alt="icn arrow-right .icn-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="overlap-group2">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <h1 class="h1-headline">{{ h1Headline1 }}</h1>
              <p class="h4-sub-headline">{{ h4SubHeadline1 }}</p>
              <div class="cta">
                <div class="button-md">
                  <div class="btn-text-2 link">{{ btnText3 }}</div>
                </div>
                <div class="button-md-1">
                  <div class="btn-text-3 link">{{ btnText4 }}</div>
                </div>
              </div>
            </div>
            <div class="col-md-6-1"></div>
          </div>
        </div>
        <img class="vote" :src="vote1" alt="Vote" />
      </div>
    </div>
    <div class="features-ui-2ebook">
      <div class="overlap-group4">
        <div class="overlap-group3 roboto-normal-ebony-clay-20px">
          <img class="vote-1" :src="vote2" alt="Vote" /><img
            class="swap-for-tokens"
            :src="swapForTokens"
            alt="Swap for Tokens"
          /><img
            class="leave-your-account-w"
            :src="leaveYourAccountWorriesToUsSoYouCan"
            alt="Leave your account worries to us, so you can focus on growing your business 1"
          />
          <div class="container"></div>
          <div class="h2-section-title">{{ h2SectionTitle1 }}</div>
          <div class="h2-section-title-1">{{ h2SectionTitle2 }}</div>
        </div>
        <p class="h2-section-title-2 roboto-normal-ebony-clay-20px">{{ h2SectionTitle3 }}</p>
        <div class="h2-section-title-3 roboto-normal-ebony-clay-40px">{{ h2SectionTitle4 }}</div>
      </div>
    </div>
    <div class="cta-ui-2app">
      <div class="overlap-group5">
        <div class="container-1">
          <div class="row-1">
            <div class="col-md-5">
              <p class="h2-section-title-4 roboto-normal-ebony-clay-40px">{{ h2SectionTitle5 }}</p>
              <p class="paragraph" v-html="paragraph"></p>
            </div>
          </div>
        </div>
        <img class="untitled-design-3-1" :src="untitledDesign31" alt="Untitled design (3) 1" />
      </div>
    </div>
    <div class="cta-ui-s25-dark">
      <div class="container-2">
        <div class="row-2">
          <div class="main-content">
            <p class="h1-headline-1">{{ h1Headline2 }}</p>
            <p class="h4-sub-headline-1">{{ h4SubHeadline2 }}</p>
            <div class="cta-1">
              <div class="button-md"><img class="btn-text-4" :src="btnText5" alt="btn-text" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-ui-1ebook">
      <div class="div">
        <div class="container-3">
          <div class="row-3">
            <div class="col-md-6-2">
              <p class="made-with-love-by-fi link">{{ madeWithLoveByFi }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage3app",
  props: [
    "navbarNav",
    "link",
    "btnText1",
    "btnText2",
    "h1Headline1",
    "h4SubHeadline1",
    "btnText3",
    "btnText4",
    "vote1",
    "vote2",
    "swapForTokens",
    "leaveYourAccountWorriesToUsSoYouCan",
    "h2SectionTitle1",
    "h2SectionTitle2",
    "h2SectionTitle3",
    "h2SectionTitle4",
    "h2SectionTitle5",
    "paragraph",
    "untitledDesign31",
    "h1Headline2",
    "h4SubHeadline2",
    "btnText5",
    "madeWithLoveByFi",
  ],
};
</script>

<style>
.landing-page-3-app {
  align-items: center;
  background-color: var(--light-background-color);
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 2093px;
  min-width: 1440px;
  width: 100%;
}

.header-2-darkapp {
  background-color: var(--light-gray-1);
  border: 1px none;
  height: 791px;
  min-width: 1440px;
  position: relative;
}

.navbar-style-2-navbar-light {
  align-items: center;
  border: 1px none;
  display: flex;
  gap: 39px;
  height: 91px;
  left: 59px;
  position: absolute;
  top: 0;
  width: 1322px;
}

.icon-mylogo {
  align-self: flex-end;
  height: 90px;
  margin-left: 9px;
  width: 187px;
}

.navbar-container {
  height: 58px;
  margin-bottom: 1px;
  position: relative;
  width: 1087px;
}

.navbar-toggler {
  border: 1px none;
  height: 14px;
  left: 1063px;
  position: absolute;
  top: 23px;
  width: 24px;
}

.collapse-navbar-collapse {
  align-items: center;
  border: 1px none;
  display: flex;
  gap: 556px;
  height: 58px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1087px;
}

.overlap-group {
  height: 33px;
  margin-top: 10px;
  position: relative;
  width: 231px;
}

.navbar-nav {
  height: 32px;
  left: 0;
  position: absolute;
  top: 1px;
  width: 47px;
}

.link {
  color: var(--mine-shaft);
  font-weight: 700;
  left: 12px;
  line-height: 24px;
  position: absolute;
  text-align: center;
  top: 0;
  white-space: nowrap;
  width: 219px;
}

.navbar-nav-1 {
  align-items: center;
  border: 1px none;
  display: flex;
  gap: 45px;
  width: fit-content;
}

.nav-item {
  border: 1px none;
  height: 22px;
  min-width: 41px;
}

.a {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  height: 22px;
  overflow: hidden;
  width: 41px;
}

.btn-text {
  color: var(--primary-text-color);
  font-weight: 700;
  line-height: 24px;
  margin-top: -1px;
  min-width: 43px;
  text-align: right;
  white-space: nowrap;
}

.nav-item-1 {
  border: 1px none;
  height: 52px;
  min-width: 214px;
  overflow: hidden;
}

.buttonbtnprimary-color {
  align-items: center;
  background-color: var(--primary-color);
  border: 1px none;
  border-radius: 5px;
  display: flex;
  gap: 15px;
  overflow: hidden;
  padding: 15px 25px;
  width: fit-content;
}

.btn-text-1 {
  color: var(--light-background-color);
  font-weight: 700;
  line-height: 22px;
  margin-top: -1px;
  white-space: nowrap;
  width: fit-content;
}

.icn-arrow-right-icn-xs {
  height: 10px;
  min-width: 12px;
}

.overlap-group2 {
  height: 682px;
  left: 0;
  position: absolute;
  top: 95px;
  width: 1440px;
}

.container-fluid {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  height: 682px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.row {
  align-items: center;
  border: 1px none;
  display: flex;
  gap: 30px;
  justify-content: flex-end;
  width: 1439px;
}

.col-md-6 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  overflow: hidden;
  width: 792px;
}

.h1-headline {
  color: var(--mine-shaft);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-xxl);
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 80px;
  margin-right: -371px;
  margin-top: -1px;
  width: 1163px;
}

.h4-sub-headline {
  color: var(--second-text-color);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-l);
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 30px;
  width: 376px;
}

.cta {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  gap: 10px;
  width: fit-content;
}

.button-md {
  align-items: center;
  background-color: var(--primary-color);
  border: 1px none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  padding: 15px 40px;
  width: fit-content;
}

.btn-text-2 {
  color: var(--light-background-color);
  font-weight: 700;
  line-height: 22px;
  margin-top: -1px;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.button-md-1 {
  align-items: center;
  border: 1px solid;
  border-color: var(--primary-color);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  padding: 15px 40px;
  width: fit-content;
}

.btn-text-3 {
  color: var(--primary-color);
  font-weight: 700;
  line-height: 22px;
  margin-top: -1px;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}

.col-md-6-1 {
  border: 1px none;
  height: 682px;
  min-width: 587px;
}

.vote {
  height: 416px;
  left: 655px;
  object-fit: cover;
  position: absolute;
  top: 118px;
  width: 784px;
}

.features-ui-2ebook {
  background-color: var(--light-background-color);
  border: 1px none;
  height: 532px;
  min-width: 1440px;
}

.overlap-group4 {
  height: 454px;
  position: relative;
  width: 1440px;
}

.overlap-group3 {
  height: 454px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.vote-1 {
  height: 280px;
  left: 865px;
  object-fit: cover;
  position: absolute;
  top: 114px;
  width: 575px;
}

.swap-for-tokens {
  height: 280px;
  left: 441px;
  object-fit: cover;
  position: absolute;
  top: 126px;
  width: 498px;
}

.leave-your-account-w {
  height: 316px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 116px;
  width: 492px;
}

.container {
  border: 1px none;
  height: 358px;
  left: 71px;
  position: absolute;
  top: 0;
  width: 341px;
}

.h2-section-title {
  left: 150px;
  letter-spacing: 0.2px;
  line-height: 50px;
  position: absolute;
  top: 404px;
  white-space: nowrap;
  width: 205px;
}

.h2-section-title-1 {
  left: 609px;
  letter-spacing: 0.2px;
  line-height: 50px;
  position: absolute;
  top: 404px;
  white-space: nowrap;
  width: 205px;
}

.h2-section-title-2 {
  left: 1009px;
  letter-spacing: 0.2px;
  line-height: 50px;
  position: absolute;
  text-align: center;
  top: 404px;
  white-space: nowrap;
}

.h2-section-title-3 {
  left: 548px;
  letter-spacing: 0.2px;
  line-height: 50px;
  position: absolute;
  top: 74px;
  white-space: nowrap;
  width: 283px;
}

.cta-ui-2app {
  background-color: var(--light-background-color);
  border: 1px none;
  height: 356px;
  min-width: 1440px;
  overflow: hidden;
}

.overlap-group5 {
  height: 364px;
  left: 195px;
  position: relative;
  top: -4px;
  width: 1245px;
}

.container-1 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  justify-content: center;
  left: 0;
  padding: 80px 0px;
  position: absolute;
  top: 0;
  width: 1050px;
}

.row-1 {
  align-items: center;
  border: 1px none;
  display: flex;
  flex: 1;
  gap: 30px;
}

.col-md-5 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 35px;
  height: 204px;
  width: 1050px;
}

.h2-section-title-4 {
  letter-spacing: 0.2px;
  line-height: 50px;
  margin-top: -1px;
  white-space: nowrap;
  width: 1050px;
}

.paragraph {
  color: var(--second-text-color);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-m);
  font-weight: 600;
  height: 60px;
  letter-spacing: 2.2px;
  line-height: 20px;
  width: 653px;
}

.untitled-design-3-1 {
  height: 356px;
  left: 703px;
  object-fit: cover;
  position: absolute;
  top: 4px;
  width: 542px;
}

.cta-ui-s25-dark {
  align-items: flex-start;
  background-color: var(--dark-background-color);
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px 195px;
  width: fit-content;
}

.container-2 {
  align-items: center;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 48px 0px;
  width: 1050px;
}

.row-2 {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 688px;
}

.main-content {
  align-items: center;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 0px;
  width: 686px;
}

.h1-headline-1 {
  color: var(--light-background-color);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-xl);
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 50px;
  margin-top: -1px;
  text-align: center;
  white-space: nowrap;
  width: 675px;
}

.h4-sub-headline-1 {
  color: var(--light-background-color);
  font-family: var(--font-family-roboto);
  font-size: var(--font-size-m);
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 20px;
  text-align: center;
  white-space: nowrap;
  width: 536px;
}

.cta-1 {
  align-items: center;
  border: 1px none;
  display: flex;
  gap: 24px;
  justify-content: center;
  width: fit-content;
}

.btn-text-4 {
  height: 17.54px;
  min-width: 227.75px;
}

.footer-ui-1ebook {
  align-items: flex-start;
  background-color: var(--light-gray-1);
  border: 1px none;
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.div {
  background-color: var(--light-gray-1);
  border: 1px none;
  height: 76px;
  min-width: 1440px;
}

.container-3 {
  align-items: center;
  border: 1px none;
  display: flex;
  flex-direction: column;
  left: 195px;
  padding: 25px 0px;
  position: relative;
  width: 1050px;
}

.row-3 {
  align-items: center;
  border: 1px none;
  display: flex;
  gap: 213px;
  width: fit-content;
}

.col-md-6-2 {
  align-items: center;
  border: 1px none;
  display: flex;
  flex-direction: column;
  width: 513px;
}

.made-with-love-by-fi {
  color: var(--second-text-color);
  font-weight: 700;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
  width: fit-content;
}
</style>
