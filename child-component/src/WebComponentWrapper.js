import React from "react";
import ReactDOM from "react-dom";
import ChildComponent from "./ChildComponent";

class ReactWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.mountPoint = document.createElement("div");
    this.shadowRoot.appendChild(this.mountPoint);
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.mountPoint);
  }

  render() {
    ReactDOM.render(
      <ChildComponent
        onDataUpdate={(data) => {
          this.dispatchEvent(
            new CustomEvent("dataUpdate", {
              detail: data,
              bubbles: true,
              composed: true,
            })
          );
        }}
      />,
      this.mountPoint
    );
  }
}

if (!customElements.get("react-child-component")) {
  customElements.define("react-child-component", ReactWebComponent);
}
