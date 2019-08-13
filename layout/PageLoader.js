import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const PageLoader = () => <div />;

export default PageLoader;
