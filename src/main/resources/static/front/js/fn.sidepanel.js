SEMICOLON.Core.getVars.fn.sidepanel=e=>{var t=SEMICOLON.Core;if((e=t.getSelector(e,!1)).length<1)return!0;let n=t.getVars.elBody.classList;document.addEventListener("click",e=>{e.target.closest("#side-panel")||e.target.closest(".side-panel-trigger")||n.remove("side-panel-open")},!1),document.querySelectorAll(".side-panel-trigger").forEach(e=>{e.onclick=e=>{n.toggle("side-panel-open"),n.contains("device-touch")&&n.contains("side-push-panel")&&n.toggle("ohidden"),e.preventDefault()}})};