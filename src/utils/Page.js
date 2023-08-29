import React from "react";
import { useRouteError } from "react-router-dom";
import $ from "jquery";

export function handleFadeIn() {
  $(".fade-in.hiding").each((i, element) => {
    var object = $(element);
    var windowObject = $(".main-wrapper");

    if (object.position().top + object.outerHeight() * 0.5
      < windowObject.scrollTop() + windowObject.height()
      && !object.parents("*").hasClass("inactive")) {
      object.removeClass("hiding");
    }
  });
}

export default function Page(props) {
  React.useEffect(() => {
    document.title = `${props.title} | 建北電資 28th` || "";

    $(".main-wrapper")[0].scrollTo({ top: 0, behavior: "instant" });

    var footerElement = $("footer")[0];
    footerElement.style.animation = "none";
    window.requestAnimationFrame((time) => {
      window.requestAnimationFrame((time) => {
        footerElement.style.animation = null;
      });
    });

    // for mobile
    $(".main-wrapper").on("scroll", handleFadeIn);
    handleFadeIn();
    // for pc
    window.addEventListener("load", () => {
      $(".main-wrapper").on("scroll", handleFadeIn);
      handleFadeIn();
    });
  }, [ props.title ]);
  return props.children;
};

export function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className="container py-5 d-flex flex-column align-items-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.status}: {error.statusText || error.message}</i>
      </p>
    </div>
  );
}