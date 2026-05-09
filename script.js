const siteConfig = {
  companyName: "DANNY'S DESPACHANTE LTDA.",
  companyDocument: "65.258.795/0001-88",
  email: "bethcontabilidade@yahoo.com.br",
  phoneDisplay: "(38) 99191-1071",
  phoneRaw: "5538991911071",
  address: "Avenida Presidente Juscelino, 768 - Sao Francisco/MG - CEP 39300-000",
};

const bySelector = (selector) => document.querySelectorAll(selector);

function setText(selector, value) {
  bySelector(selector).forEach((element) => {
    element.textContent = value;
  });
}

function setLink(selector, href, label) {
  bySelector(selector).forEach((element) => {
    element.setAttribute("href", href);
    if (label) {
      element.textContent = label;
    }
  });
}

function applyCompanyData() {
  setText("[data-company-name]", siteConfig.companyName);
  setText("[data-company-document]", siteConfig.companyDocument);
  setText("[data-company-address]", siteConfig.address);
  setText("[data-current-year]", String(new Date().getFullYear()));

  setLink("[data-company-email]", `mailto:${siteConfig.email}`, siteConfig.email);
  setLink("[data-company-phone]", `tel:+${siteConfig.phoneRaw}`, siteConfig.phoneDisplay);
}

applyCompanyData();
const menuToggleButton = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

if (menuToggleButton && mobileMenu) {
  menuToggleButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    menuToggleButton.setAttribute("aria-expanded", String(isOpen));
  });
}
