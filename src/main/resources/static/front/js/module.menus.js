export default function (e) {
  var t = SEMICOLON.Core;
  if ((e = t.getSelector(e, !1)).length < 1) return !0;
  CanvasMenuInit(),
    CanvasMenuReset(),
    CanvasMenuArrows(),
    CanvasMenuInvert(),
    CanvasMenuFunctions(),
    CanvasMenuTrigger(),
    CanvasMenuFullWidth(),
    (t.getVars.resizers.menus = () => SEMICOLON.Base.menus()),
    (t.getVars.recalls.menureset = () => CanvasMenuReset());
}
const CanvasMenuInit = () => {
    var e = SEMICOLON.Core;
    (e.getVars.headerWrapHeight = e.getVars.elHeaderWrap?.offsetHeight),
      document.addEventListener(
        "click",
        (e) => {
          e.target.closest(".primary-menu-trigger") ||
            e.target.closest(".primary-menu") ||
            (CanvasMenuReset(), CanvasMenuFunctions()),
            e.target.closest(".top-links.on-click") ||
              (document
                .querySelectorAll(".top-links.on-click")
                .forEach((e) =>
                  e
                    .querySelectorAll(".top-links-sub-menu,.top-links-section")
                    .forEach((e) => e.classList.remove("d-block"))
                ),
              document
                .querySelectorAll(".top-links.on-click")
                .forEach((e) =>
                  e
                    .querySelectorAll(".top-links-item")
                    .forEach((e) => e.classList.remove("current"))
                ));
        },
        !1
      ),
      document.querySelectorAll(".menu-item").forEach((e) => {
        var t;
        0 < e.querySelectorAll(".sub-menu-container").length &&
          e.classList.add("sub-menu"),
          !e.classList.contains("mega-menu-title") &&
            0 < e.querySelectorAll(".sub-menu-container").length &&
            e.querySelectorAll(".sub-menu-trigger").length < 1 &&
            (((t = document.createElement("button")).classList =
              "sub-menu-trigger fa-solid fa-chevron-right"),
            e.append(t));
      });
  },
  CanvasMenuReset = () => {
    const t = SEMICOLON.Core;
    let r = t.getVars.elBody;
    document
      .querySelectorAll(".primary-menu-trigger")
      .forEach((e) => e.classList.remove("primary-menu-trigger-active")),
      t.getVars.elPrimaryMenus.forEach((e) => {
        r.classList.contains("is-expanded-menu")
          ? (document
              .querySelectorAll(".menu-container:not(.mobile-primary-menu)")
              .forEach((e) => (e.style.display = "")),
            (r.classList.contains("device-xl") ||
              r.classList.contains("device-lg")) &&
              t.getVars.elPrimaryMenus.forEach((e) =>
                e
                  .querySelectorAll(".mobile-primary-menu")
                  ?.forEach((e) => e.classList.remove("d-block"))
              ))
          : e.classList.contains("mobile-menu-off-canvas")
          ? e.querySelector(".menu-container").classList.remove("d-block")
          : t.slideUp(e.querySelector(".menu-container"));
        e = r.className
          .split(" ")
          .filter((e) => !e.startsWith("primary-menu-open"));
        r.className = e.join(" ").trim();
      }),
      [...t.getVars.elPrimaryMenus]
        .filter((e) => e.matches(".on-click"))
        .forEach((e) => {
          e
            .querySelector(".menu-container")
            .querySelectorAll(".d-block")
            ?.forEach((e) => e.classList.remove("d-block")),
            e
              .querySelectorAll(".menu-item")
              .forEach((e) => e.classList.remove("current"));
        });
  },
  CanvasMenuArrows = () => {
    const r = (e) => {
      var t;
      e.querySelector(".fa-caret-down") ||
        ((t = document.createElement("i")).classList.add(
          "fa-solid",
          "fa-caret-down"
        ),
        e.append(t));
    };
    document.querySelectorAll(".top-links-item").forEach((e) => {
      var t = e.querySelector(":scope > a");
      e.querySelector(
        ":scope > .top-links-sub-menu, :scope > .top-links-section"
      ) && r(t);
    }),
      document.querySelectorAll(".menu-item").forEach((e) => {
        var t = e.querySelector(":scope > .menu-link > div");
        !e.classList.contains("mega-menu-title") &&
          e.querySelector(
            ":scope > .sub-menu-container, :scope > .mega-menu-content"
          ) &&
          r(t);
      }),
      document.querySelectorAll(".page-menu-item").forEach((e) => {
        var t = e.querySelector(":scope > a > div");
        e.querySelector(":scope > .page-menu-sub-menu") && r(t);
      });
  },
  CanvasMenuInvert = (e) => {
    const r = SEMICOLON.Core;
    e =
      e ||
      document.querySelectorAll(
        ".mega-menu-content, .sub-menu-container, .top-links-section"
      );
    e.forEach((e) => {
      e.classList.remove("menu-pos-invert");
      e
        .querySelectorAll(":scope > *")
        .forEach((e) => (e.style.display = "block")),
        (e.style.display = "block");
      var t = e.getBoundingClientRect();
      r.getVars.elBody.classList.contains("rtl") &&
        t.left < 0 &&
        e.classList.add("menu-pos-invert"),
        r.viewport().width - (t.left + t.width) < 0 &&
          e.classList.add("menu-pos-invert");
    }),
      e.forEach((e) => {
        e.querySelectorAll(":scope > *").forEach((e) => (e.style.display = "")),
          (e.style.display = "");
      });
  },
  CanvasMenuFunctions = () => {
    const l = SEMICOLON.Core;
    let t = l.has(document.querySelectorAll(".menu-item"), ".sub-menu-trigger"),
      s = ".mega-menu-content, .sub-menu-container",
      n = (document.querySelectorAll(s), ".menu-item"),
      o = ".sub-menu",
      c =
        (l.getVars.elPrimaryMenus[0] &&
          l.getVars.elPrimaryMenus[0].getAttribute("data-trigger-speed")) ||
        200,
      a = ".sub-menu-trigger",
      r = l.getVars.elBody.classList;
    c = Number(c);
    var e = document.querySelectorAll(a);
    let i = new Array();
    e.forEach((e) => {
      e = e.closest(".menu-item").querySelector('.menu-link[href^="#"]');
      e && i.push(e);
    });
    e = [...e, ...i];
    ((r.contains("side-header") &&
      l.getVars.elPrimaryMenus[0].classList.contains("on-click")) ||
      !r.contains("is-expanded-menu")) &&
      (document
        .querySelectorAll(a)
        .forEach((e) => e.classList.remove("icon-rotate-90")),
      l.getVars.elPrimaryMenus.forEach((e) =>
        e
          .querySelectorAll(s)
          .forEach((e) => l.slideUp(e, c, () => r.remove("primary-menu-open")))
      ),
      e.forEach((r) => {
        r.onclick = (e) => {
          let t = r;
          r.classList.contains("sub-menu-trigger") ||
            (t = r.closest(n).querySelector(":scope > " + a)),
            l
              .siblings(t.closest(o))
              .forEach((e) =>
                e.querySelector(a)?.classList.remove("icon-rotate-90")
              ),
            l
              .siblings(t.closest(o))
              .forEach((e) =>
                e.querySelectorAll(s).forEach((e) => l.slideUp(e, c))
              ),
            l.slideToggle(t.closest(n).querySelector(":scope > " + s), c),
            t.classList.toggle("icon-rotate-90"),
            e.preventDefault();
        };
      })),
      [...l.getVars.elPrimaryMenus]
        .filter((e) => e.matches(".on-click"))
        .forEach((e) => {
          r.contains("overlay-menu") && r.contains("is-expanded-menu")
            ? t.forEach((e) => {
                let t = e.querySelector(":scope > .menu-link");
                t.onclick = (e) => {
                  l
                    .siblings(t.closest(o))
                    .forEach((e) =>
                      e.querySelectorAll(s).forEach((e) => l.slideUp(e, c))
                    ),
                    l.slideToggle(
                      t.closest(n).querySelector(":scope > " + s),
                      c
                    ),
                    e.preventDefault();
                };
              })
            : t.forEach((e) => {
                let t = e.querySelector(":scope > .menu-link");
                t.onclick = (e) => {
                  l
                    .siblings(t.closest(o))
                    .forEach((e) =>
                      e
                        .querySelectorAll(s)
                        .forEach((e) => e.classList.remove("d-block"))
                    ),
                    t
                      .closest(n)
                      .querySelector(":scope > " + s)
                      .classList.toggle("d-block"),
                    l
                      .siblings(t.closest(n))
                      .forEach((e) => e.classList.remove("current")),
                    t.closest(n).classList.toggle("current"),
                    e.preventDefault();
                };
              });
        }),
      (r.contains("overlay-menu") || r.contains("side-header")) &&
        r.contains("is-expanded-menu") &&
        ([...l.getVars.elPrimaryMenus]
          .filter((e) => !e.matches(".on-click"))
          .forEach((e) =>
            e.querySelectorAll(s).forEach((e) => l.slideUp(e, c))
          ),
        document.querySelectorAll(o).forEach((e) => {
          if (!e.closest(".primary-menu.on-click")) {
            let t = e.querySelector(":scope > " + s);
            (e.onmouseover = (e) => {
              l.slideDown(t, c);
            }),
              (e.onmouseout = (e) => {
                l.slideUp(t, c);
              });
          }
        })),
      document.querySelectorAll(".top-links").forEach((e) => {
        (!e.classList.contains("on-click") && r.contains("device-up-lg")) ||
          document.querySelectorAll(".top-links-item").forEach((t) => {
            0 <
              t.querySelectorAll(".top-links-sub-menu,.top-links-section")
                .length &&
              (t.querySelector(":scope > a").onclick = (e) => {
                l
                  .siblings(t)
                  .forEach((e) =>
                    e
                      .querySelectorAll(
                        ".top-links-sub-menu, .top-links-section"
                      )
                      .forEach((e) => e.classList.remove("d-block"))
                  ),
                  t
                    .querySelector(
                      ":scope > .top-links-sub-menu, :scope > .top-links-section"
                    )
                    .classList.toggle("d-block"),
                  l.siblings(t).forEach((e) => e.classList.remove("current")),
                  t.classList.toggle("current"),
                  e.preventDefault();
              });
          });
      }),
      CanvasMenuInvert(document.querySelectorAll(".top-links-section"));
  },
  CanvasMenuTrigger = () => {
    const l = SEMICOLON.Core;
    let s = l.getVars.elBody.classList,
      n =
        (l.getVars.elPrimaryMenus[0] &&
          l.getVars.elPrimaryMenus[0].getAttribute("data-trigger-speed")) ||
        200;
    document.querySelectorAll(".primary-menu-trigger").forEach((r) => {
      r.onclick = (e) => {
        var t = r.getAttribute("data-target") || "*";
        l.filtered(l.getVars.elPrimaryMenus, t).length < 1 ||
          (s.contains("is-expanded-menu") ||
            l.getVars.elPrimaryMenus.forEach((e) => {
              0 < e.querySelectorAll(".mobile-primary-menu").length
                ? e.classList.contains("mobile-menu-off-canvas")
                  ? e.matches(t) &&
                    e
                      .querySelectorAll(".mobile-primary-menu")
                      .forEach((e) => e.classList.toggle("d-block"))
                  : e.matches(t) &&
                    e
                      .querySelectorAll(".mobile-primary-menu")
                      .forEach((e) => l.slideToggle(e, n))
                : e.classList.contains("mobile-menu-off-canvas")
                ? e.matches(t) &&
                  e
                    .querySelectorAll(".menu-container")
                    .forEach((e) => e.classList.toggle("d-block"))
                : e.matches(t) &&
                  e
                    .querySelectorAll(".menu-container")
                    .forEach((e) => l.slideToggle(e, n));
            }),
          r.classList.toggle("primary-menu-trigger-active"),
          [...l.getVars.elPrimaryMenus]
            .filter((e) => e.matches(t))
            .forEach((e) => e.classList.toggle("primary-menu-active")),
          s.toggle("primary-menu-open"),
          "*" != t
            ? s.toggle("primary-menu-open-" + t.replace(/[^a-zA-Z0-9-]/g, ""))
            : s.toggle("primary-menu-open-all"),
          e.preventDefault());
      };
    });
  },
  CanvasMenuFullWidth = () => {
    var e = SEMICOLON.Core;
    if (!e.getVars.elBody.classList.contains("is-expanded-menu"))
      return (
        document
          .querySelectorAll(".mega-menu-content, .top-search-form")
          .forEach((e) => (e.style.width = "")),
        !0
      );
    let r = document
      .querySelector(
        ".mega-menu:not(.mega-menu-full):not(.mega-menu-small) .mega-menu-content"
      )
      ?.closest(".header-row").offsetWidth;
    if (
      (0 < e.getVars.elHeader.querySelectorAll(".container-fullwidth").length &&
        document
          .querySelectorAll(
            ".mega-menu:not(.mega-menu-full):not(.mega-menu-small) .mega-menu-content"
          )
          .forEach((e) => (e.style.width = r + "px")),
      document
        .querySelectorAll(
          ".mega-menu:not(.mega-menu-full):not(.mega-menu-small) .mega-menu-content, .top-search-form"
        )
        .forEach((e) => (e.style.width = r + "px")),
      e.getVars.elHeader.classList.contains("full-header") &&
        document
          .querySelectorAll(
            ".mega-menu:not(.mega-menu-full):not(.mega-menu-small) .mega-menu-content"
          )
          .forEach((e) => (e.style.width = r + "px")),
      e.getVars.elHeader.classList.contains("floating-header"))
    ) {
      let t = getComputedStyle(
        document.querySelector("#header")
      ).getPropertyValue("--cnvs-header-floating-padding");
      document
        .querySelectorAll(
          ".mega-menu:not(.mega-menu-full):not(.mega-menu-small) .mega-menu-content"
        )
        .forEach(
          (e) => (e.style.width = r + 2 * Number(t.split("px")[0]) + "px")
        );
    }
  };
