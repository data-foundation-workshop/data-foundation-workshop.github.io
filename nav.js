// Shared sidebar navigation for all workshop pages
// Edit this file to update the menu across every page.

// PRIMARY MENU: this workshop.
// "label" is the bold title, "subtitle" is the small line beneath it.
const NAV_ITEMS = [
  { href: "index.html", icon: "fa-home", label: "Introduction" },
  { href: "lab-0.html", icon: "fa-plug", label: "Connect the Systems", subtitle: "Lab 0" },
  { href: "lab-1.html", icon: "fa-book", label: "Define Business Meaning & Governance", subtitle: "Lab 1" },
  { href: "lab-2.html", icon: "fa-search", label: "Discover What Is in the Data", subtitle: "Lab 2" },
  { href: "lab-3.html", icon: "fa-check-square-o", label: "Agree on What Good Data Means", subtitle: "Lab 3" },
  { href: "lab-4a.html", icon: "fa-tachometer", label: "Build Rules & Measure the Data", subtitle: "Lab 4A" },
  { href: "lab-4b.html", icon: "fa-filter", label: "Clean, Validate & Route the Data", subtitle: "Lab 4B" },
  { href: "lab-5.html", icon: "fa-users", label: "Master the Customer in MDM", subtitle: "Lab 5" },
  { href: "lab-6.html", icon: "fa-share-alt", label: "Choose How Consumers Use the Master", subtitle: "Lab 6" },
  { href: "lab-7.html", icon: "fa-bolt", label: "Activate in Salesforce Data 360", subtitle: "Lab 7" },
  { href: "lab-8.html", icon: "fa-sitemap", label: "Catalog, Govern & Trace the Landscape", subtitle: "Lab 8" },
  { href: "lab-9.html", icon: "fa-shield", label: "Security & Architecture Review", subtitle: "Lab 9" }
];

// SECONDARY MENUS: links to the other workshops (open in a new tab).
const OTHER_WORKSHOPS = [
  {
    title: "Customer Experience Transformation with Salesforce Data Cloud",
    subtitle: "Hands-on Workshop and Ideation",
    items: [
      { href: "https://datacloud-workshop.github.io/index.html", icon: "fa-th-large", label: "Get Started" },
      { href: "https://datacloud-workshop.github.io/insidedatacloud.html", icon: "fa-lightbulb-o", label: "Concepts" },
      { href: "https://datacloud-workshop.github.io/hands-on.html", icon: "fa-laptop", label: "Hands-on Lab" },
      { href: "https://datacloud-workshop.github.io/ideation.html", icon: "fa-comments-o", label: "Ideation" },
      { href: "https://datacloud-workshop.github.io/resources.html", icon: "fa-book", label: "Resources" }
    ]
  },
  {
    title: "Build Multi-Agent Systems with Salesforce",
    subtitle: "Demystifying Data360, MCP, A2A, Mule Fabric Broker and Agentforce",
    items: [
      { href: "https://mas-workshop.github.io/index.html", icon: "fa-home", label: "Overview" },
      { href: "https://mas-workshop.github.io/stage-0.html", icon: "fa-wrench", label: "Stage 0", subtitle: "A Foundational Generative AI App" },
      { href: "https://mas-workshop.github.io/stage-1.html", icon: "fa-plug", label: "Stage 1", subtitle: "Enterprise-Grade LLM Activation with Mule Inference Connector" },
      { href: "https://mas-workshop.github.io/stage-2.html", icon: "fa-database", label: "Stage 2", subtitle: "Building Enterprise-Aware AI Agent Capability with Mule & MCP" },
      { href: "https://mas-workshop.github.io/stage-3.html", icon: "fa-share-alt", label: "Stage 3", subtitle: "Build Your Own Gen AI Agents with A2A & MCP" },
      { href: "https://mas-workshop.github.io/stage-4.html", icon: "fa-users", label: "Stage 4", subtitle: "Agentforce + Data360" },
      { href: "https://mas-workshop.github.io/stage-5.html", icon: "fa-sitemap", label: "Stage 5", subtitle: "Mule Agent Fabric Broker for Orchestrating Multi-Agent Systems" }
    ]
  }
];

// Build a single menu item link.
function buildItem(item, currentPage, external) {
  const isActive = (!external && currentPage === item.href) ? " w3-light-grey" : "";
  const target = external ? ' target="_blank"' : "";
  let html = '<a href="' + item.href + '"' + target + ' onclick="w3_close()" class="w3-bar-item w3-button' + isActive + '" style="display:flex !important;align-items:flex-start;padding:12px 16px;text-decoration:none;">';
  html += '<i class="fa ' + item.icon + ' fa-fw w3-margin-right" style="margin-top:3px;width:24px;flex-shrink:0;"></i>';
  html += '<span style="flex-grow:1;line-height:1.4;white-space:normal;">';
  html += '<span style="font-weight:bold;display:block;">' + item.label + '</span>';
  if (item.subtitle) {
    html += '<span style="font-size:0.85em;color:#555;display:block;">' + item.subtitle + '</span>';
  }
  html += '</span></a>';
  return html;
}

function buildNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const sidebar = document.getElementById("mySidebar");
  if (!sidebar) return;

  let html = '<br><div class="w3-container">';
  html += '<a href="#" onclick="w3_close()" class="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu"><i class="fa fa-remove"></i></a>';
  html += '<h4>Trusted Data Foundation</h4>';
  html += '<p>An Interactive Journey</p>';
  html += '</div>';

  // Primary menu.
  html += '<div class="w3-bar-block">';
  NAV_ITEMS.forEach(function(item) {
    html += buildItem(item, currentPage, false);
  });
  html += '</div>';

  // Secondary menus (other workshops).
  OTHER_WORKSHOPS.forEach(function(ws) {
    html += '<hr style="margin:20px 0;">';
    html += '<div class="w3-container"><h4>' + ws.title + '</h4><p>' + ws.subtitle + '</p></div>';
    html += '<div class="w3-bar-block">';
    ws.items.forEach(function(item) {
      html += buildItem(item, currentPage, true);
    });
    html += '</div>';
  });

  sidebar.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", buildNav);
