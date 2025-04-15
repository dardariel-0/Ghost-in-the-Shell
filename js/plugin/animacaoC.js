// ===== core.js =====
"use strict";

/* Cache Global de Elementos */
const DOM = {
  header: document.querySelector("header"),
  menu: document.querySelector(".main-menu"),
  scrollTopBtn: document.querySelector(".scroll-top"),
  // Adicione outros elementos-chave aqui
};

/* Sistema de Eventos Otimizado */
const EventSystem = {
  listeners: new Map(),

  on(element, event, callback) {
    const handler = debounce(callback, 100);
    element.addEventListener(event, handler);
    this.listeners.set(`${event}-${element.dataset.id}`, handler);
  },

  off(element, event) {
    const key = `${event}-${element.dataset.id}`;
    if (this.listeners.has(key)) {
      element.removeEventListener(event, this.listeners.get(key));
    }
  },
};

/* Helpers Performance */
const debounce = (func, wait = 50) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const throttle = (func, limit = 100) => {
  let lastFunc;
  let lastRan;
  return (...args) => {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

// ===== ui-components.js =====
/* Menu Mobile Otimizado */
class MobileMenu {
  constructor() {
    this.menu = DOM.menu;
    this.isOpen = false;
    this.init();
  }

  init() {
    EventSystem.on(document.querySelector(".menu-toggle"), "click", () =>
      this.toggle()
    );
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.menu.classList.toggle("open");
    document.body.style.overflow = this.isOpen ? "hidden" : "";
  }
}

/* Scroll-to-Top Moderno */
const scrollTop = {
  init() {
    EventSystem.on(DOM.scrollTopBtn, "click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  },
};

// ===== scroll-manager.js =====
/* Controle de Scroll Aplicado */
class ScrollManager {
  static instances = [];

  constructor(element, offset = 100) {
    this.element = element;
    this.offset = offset;
    this.init();
    ScrollManager.instances.push(this);
  }

  init() {
    EventSystem.on(
      window,
      "scroll",
      throttle(this.checkPosition.bind(this), 16)
    );
    this.checkPosition();
  }

  checkPosition() {
    const rect = this.element.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight - this.offset;
    this.element.classList.toggle("active", isVisible);
  }
}

// Inicializa elementos com data-scroll
document.querySelectorAll("[data-scroll]").forEach((el) => {
  new ScrollManager(el, el.dataset.scrollOffset || 100);
});

// ===== main.js =====
document.addEventListener("DOMContentLoaded", () => {
  // Inicializa componentes
  new MobileMenu();
  scrollTop.init();

  // Otimização de imagens
  if ("loading" in HTMLImageElement.prototype) {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      img.src = img.dataset.src;
    });
  }
});

// ===== polyfills.js =====
/* Apenas o essencial para compatibilidade */
if (!NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    let el = this;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}
