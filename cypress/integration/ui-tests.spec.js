/// <reference types="Cypress" />

describe("UI tests", function() {
  beforeEach("it visits the site", function() {
    cy.visit("/");
  });

  it("validates home page content", function() {
    cy.contains("Cecelia Martinez");
    cy.contains("Code + Content");
    cy.contains("PROJECTS");
    cy.contains("TALKS");
    cy.contains("BLOG");
  });

  it("validates navigation links", function() {
    cy.get("[data-cy=home-link]").click();
    cy.contains("Cecelia Martinez");

    cy.get("[data-cy=projects-link]").click();
    cy.url().should("contain", "projects");
    cy.contains("Folio");

    cy.get("[data-cy=talks-link]").click();
    cy.url().should("contain", "talks");
    cy.contains("Ioniconf");

    cy.get("[data-cy=blog-link]").click();
    cy.url().should("contain", "blog");
    cy.contains("Sequelize");
  });

  it("validates icon links", function() {
    cy.get("[data-cy=twitter-link]").should(
      "have.attr",
      "href",
      "http://www.twitter.com/ceceliacreates"
    );

    cy.get("[data-cy=github-link]").should(
      "have.attr",
      "href",
      "http://www.github.com/ceceliacreates"
    );

    cy.get("[data-cy=linkedin-link]").should(
      "have.attr",
      "href",
      "https://www.linkedin.com/in/ceceliamartinez/"
    );

    cy.get("[data-cy=twitch-link]").should(
      "have.attr",
      "href",
      "https://www.twitch.tv/ceceliacreates"
    );
  });

  it("validates first talk page", function() {
    cy.get("[data-cy=talks-link]").click();
    cy.url().should("contain", "talks");

    cy.get(".talk-card")
      .first()
      .click();
    cy.get("[data-cy=talk-video]");
    cy.contains("Video");
    cy.contains("Slides");
  });

  it("validates first project page", function() {
    cy.get("[data-cy=projects-link]").click();
    cy.url().should("contain", "projects");

    cy.get(".project-card")
      .first()
      .click();
    cy.contains("GitHub Repository").should("have.attr", "href");
  });

  it("validates first blog page", function() {
    cy.get("[data-cy=blog-link]").click();
    cy.url().should("contain", "blog");

    cy.contains("How to clone a GitHub repository").click();
    cy.url().should("contain", "how-to-clone-a-github-repository");
    cy.get("img")
      .first()
      .should(
        "have.attr",
        "src",
        "/_nuxt/assets/images/how-to-clone-a-github-repository.png"
      );
  });
});
